"use server";

import { z } from "zod";
import { enrollmentSchema } from "@/lib/schema";
import { supabase } from "@/lib/supabase";
import { appendToGoogleSheet } from "@/lib/google-sheets";

export async function submitApplication(formData: FormData) {
  try {
    // 1. Parse JSON data back into object (excluding file)
    const rawData = formData.get("data") as string;
    if (!rawData) {
      return { success: false, error: "Dữ liệu không hợp lệ." };
    }
    const parsedData = JSON.parse(rawData);
    
    // Server-side validation
    const validationResult = enrollmentSchema.safeParse(parsedData);
    if (!validationResult.success) {
      console.error(validationResult.error);
      return { success: false, error: "Vui lòng điền đúng và đủ thông tin bắt buộc." };
    }

    const validData = validationResult.data;
    
    // 2. Generate unique ID (Format: NK26-YYMMDD-ABC123)
    const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
    const studentId = `NK26-${dateStr}-${randomStr}`;

    // 3. Handle File Upload to Supabase Storage
    const file = formData.get("file") as File | null;
    let fileUrl = "";

    if (file && file.size > 0 && file.name !== "undefined") {
      const fileExt = file.name.split('.').pop();
      const fileName = `${studentId}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('achievements')
        .upload(fileName, file);

      if (uploadError) {
        console.error("Storage Error:", uploadError);
        return { success: false, error: "Lỗi tải lên tệp đính kèm." };
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from('achievements')
        .getPublicUrl(fileName);
      
      fileUrl = publicUrlData.publicUrl;
    }

    // 4. Save to Supabase Database (Assuming table name is 'applications')
    const { error: dbError } = await supabase
      .from('applications')
      .insert({
        id: studentId,
        full_name: validData.student.fullName,
        gender: validData.student.gender,
        dob: validData.student.dob,
        birth_place: validData.student.birthPlace || "",
        ethnicity: validData.student.ethnicity || "Kinh",
        address: validData.student.address,
        current_living: validData.student.currentLiving || "",
        
        school_name: validData.academic.schoolName,
        district: validData.academic.district,
        grad_year: validData.academic.gradYear || new Date().getFullYear().toString(),
        academic_performance: validData.academic.academicPerformance,
        conduct: validData.academic.conduct,
        height: validData.academic.height,
        weight: validData.academic.weight,
        
        father_name: validData.parents.father.name || "",
        father_contact: validData.parents.father.contact || "",
        mother_name: validData.parents.mother.name || "",
        mother_contact: validData.parents.mother.contact || "",
        
        major: validData.application.major,
        achievements: validData.application.achievements || "",
        file_url: fileUrl,
      });

    if (dbError) {
      console.error("DB Error:", dbError);
      return { success: false, error: "Không thể lưu thông tin vào cơ sở dữ liệu." };
    }

    // 5. Append to Google Sheets
    // Format the row array based on columns you want in sheet
    const rowData = [
      studentId,                                     // A: ID
      new Date().toLocaleString('vi-VN'),           // B: Timestamp
      validData.student.fullName,                    // C: Họ Tên
      validData.student.gender,                      // D: Giới tính
      validData.student.dob,                         // E: Ngày sinh
      validData.student.address,                     // F: Nơi Sinh
      validData.academic.schoolName,                 // G: Trường THCS
      validData.academic.district,                   // H: Quận
      validData.academic.academicPerformance,        // I: Học Lực
      validData.academic.conduct,                    // J: Hạnh Kiểm
      validData.parents.father.contact || validData.parents.mother.contact, // K: SĐT Liên Hệ
      validData.application.major,                   // L: Môn dự tuyển
      validData.application.achievements || "Không", // M: Thành tích
      fileUrl || "Không đính kèm"                    // N: Link minh chứng
    ];

    try {
      await appendToGoogleSheet(rowData);
    } catch (sheetError) {
      console.error("Sheet Error (Data saved to DB successfully):", sheetError);
      // NOTE: We do not fail the submission if ONLY Google Sheets fails 
      // but it's recorded in supabase. 
    }

    // Return successful ID
    return { success: true, id: studentId };

  } catch (error) {
    console.error("Server Action Exception:", error);
    return { success: false, error: "Đã có lỗi hệ thống xảy ra." };
  }
}

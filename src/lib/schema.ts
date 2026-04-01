import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

export const enrollmentSchema = z.object({
  // Bước 1: Thông tin học sinh
  student: z.object({
    fullName: z.string().min(2, "Vui lòng nhập họ tên đầy đủ"),
    gender: z.enum(["Nam", "Nữ"], {
      message: "Vui lòng chọn giới tính",
    }),
    dob: z.string().min(1, "Vui lòng chọn ngày sinh"),
    birthPlace: z.string().optional(),
    ethnicity: z.string().optional(),
    address: z.string().min(5, "Vui lòng nhập địa chỉ thường trú"),
    currentLiving: z.string().optional(),
  }),

  // Bước 2: Học lực & Tố chất
  academic: z.object({
    schoolName: z.string().min(2, "Vui lòng nhập tên trường lớp 9"),
    district: z.string().min(1, "Vui lòng chọn quận/huyện"),
    gradYear: z.string().optional(),
    academicPerformance: z.string().min(1, "Vui lòng chọn học lực"),
    conduct: z.string().min(1, "Vui lòng chọn hạnh kiểm"),
    weight: z.coerce.number({ message: "Vui lòng nhập số" }).min(20, "Cân nặng không hợp lệ"),
    height: z.coerce.number({ message: "Vui lòng nhập số" }).min(1, "Chiều cao không hợp lệ (m)"),
  }),

  // Bước 3: Thông tin phụ huynh
  parents: z.object({
    father: z.object({
      name: z.string().min(2, "Vui lòng nhập tên Cha/Người giám hộ"),
      yob: z.string().optional(),
      job: z.string().optional(),
      workplace: z.string().optional(),
      address: z.string().optional(),
      contact: z.string().min(9, "Số điện thoại không hợp lệ"),
    }),
    mother: z.object({
      name: z.string().min(2, "Vui lòng nhập tên Mẹ/Người giám hộ"),
      yob: z.string().optional(),
      job: z.string().optional(),
      workplace: z.string().optional(),
      address: z.string().optional(),
      contact: z.string().min(9, "Số điện thoại không hợp lệ"),
    }),
  }),

  // Bước 4: Đăng ký & Thành tích
  application: z.object({
    major: z.string().min(1, "Vui lòng chọn môn đăng ký dự tuyển"),
    achievements: z.string().optional(),
    file: z
      .any()
      // client-side File object validation will happen here
      .optional()
  }),
});

export type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

export const defaultValues: Partial<EnrollmentFormData> = {
  student: {
    fullName: "",
    gender: undefined as unknown as "Nam" | "Nữ",
    dob: "",
    birthPlace: "",
    ethnicity: "Kinh",
    address: "",
    currentLiving: "",
  },
  academic: {
    schoolName: "",
    district: "",
    gradYear: new Date().getFullYear().toString(),
    academicPerformance: "",
    conduct: "",
    weight: undefined as unknown as number,
    height: undefined as unknown as number,
  },
  parents: {
    father: { name: "", yob: "", job: "", workplace: "", address: "", contact: "" },
    mother: { name: "", yob: "", job: "", workplace: "", address: "", contact: "" },
  },
  application: {
    major: "",
    achievements: "",
    file: undefined,
  }
};

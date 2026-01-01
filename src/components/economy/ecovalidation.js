import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    //recipt voucher info
    rvNo: Yup.string().required("رقم سند القبض مطلوب"),
    rvDate: Yup.date().required("تاريخ سند القبض مطلوب"),
    currency: Yup.string().required("العملة مطلوبة"),
    amount: Yup.number().required("  المبلغ مطلوب").positive("المبلغ يجب أن يكون رقم موجب"),
    description: Yup.string().max(500, 'الوصف لا يجب أن يتجاوز 500 حرف'),
    //recipt type info
    rvType: Yup.string().oneOf([], 'الرجاء اختيار تصنيف السند').required('الجنس مطلوب'),

    //address and contact info 
    Mobile:Yup.string().matches(/^\d{10,15}$/, 'رقم الهاتف يجب أن يحتوي على 10 إلى 15 رقم'),
    email: Yup.string()
    .required('الإيميل مطلوب')
    .email('صيغة الإيميل غير صحيحة'),
  phone: Yup.string().matches(/^\d{10,15}$/, 'رقم الهاتف يجب أن يحتوي على 10 إلى 15 رقم'),
  
  attachments: Yup.mixed()
    .test('fileSize', 'حجم الملف يجب أن يكون أقل من 5MB', (value) => {
      if (!value || value.length === 0) return true;
      return Array.from(value).every(file => file.size <= 5 * 1024 * 1024);
    })
    .test('fileType', 'نوع الملف غير مدعوم', (value) => {
      if (!value || value.length === 0) return true;
      return Array.from(value).every(file =>
        ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)
      );
    }),

});
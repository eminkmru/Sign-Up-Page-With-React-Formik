import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen geçerli bir yaş giriniz.")
    .integer("Lütfen geçerli bir yaş giriniz.")
    .required("Yaş girmek zorunludur."),
  password: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz.")
    .matches(passwordRules, {
      message:
        "Lütfen en az bir büyük harf bir küçük harf ve bir sayı giriniz.",
    })
    .required("Şifre girmek zorunludur."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler Eşleşmiyor.")
    .required("Lütfen şifrenizi tekrar giriniz."),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minimum 3 karakter uzunluğunda olmalıdır.")
    .required("Kullanıcı adı zorunludur"),
  universtiy: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "meü"], "Lütfen üniversitenizi seçiniz.")
    .required("Lütfen üniversitenizi seçiniz."),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabuk ediniz."),
});

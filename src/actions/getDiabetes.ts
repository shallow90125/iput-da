"use server";

export async function getDiabetes(formData: Diabetes) {
  console.log(formData);
  await new Promise((s) => setTimeout(s, 3000));
  return 1;
}

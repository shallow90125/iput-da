"use server";

export async function getHypertension(formData: Hypertension) {
  console.log(formData);
  await new Promise((s) => setTimeout(s, 3000));
  return 1;
}

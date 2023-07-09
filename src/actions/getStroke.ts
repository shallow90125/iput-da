"use server";

export async function getStroke(formData: Stroke) {
  console.log(formData);
  await new Promise((s) => setTimeout(s, 3000));
  return 1;
}

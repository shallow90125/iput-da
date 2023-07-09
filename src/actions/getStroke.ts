"use server";

export async function getStroke(formData: Stroke) {
  const url = process.env.BASE_URL + "/stroke";
  const params = new URLSearchParams(Object.entries(formData)).toString();
  try {
    const res = await fetch(url + "?" + params, {
      cache: "no-store",
    });
    const data: ResponseData = await res.json();
    return data.isSick;
  } catch (error) {
    return null;
  }
}

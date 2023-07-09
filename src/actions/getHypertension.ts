"use server";

export async function getHypertension(formData: Hypertension) {
  const url = process.env.BASE_URL + "/hypertension";
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

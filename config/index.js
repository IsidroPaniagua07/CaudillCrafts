const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://caudills-crafts-h4kq515ir-isidropaniagua07.vercel.app/";

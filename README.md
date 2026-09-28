# OpenAgriX landing page

Bilingual English–Vietnamese landing page designed from the product at [OpenAgriX](https://openagri-v3.vercel.app/). Built with Node.js, Next.js App Router, React, and TypeScript.

## Chạy trên máy

Yêu cầu Node.js 20.9 trở lên và npm.

```sh
npm ci
npm run dev
```

Mở http://localhost:3000. Đường dẫn `/` chuyển sang `/en`; bản tiếng Việt nằm ở `/vi`. Chuyển ngôn ngữ giữ lại section đang truy cập qua URL hash.

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

## Chỉnh sửa

- `src/lib/content.ts`: nội dung và nhãn giao diện của cả hai ngôn ngữ.
- `src/lib/links.ts`: liên kết tới ứng dụng OpenAgriX thật.
- `src/app/[locale]/page.tsx`: bố cục landing page.
- `src/app/[locale]/layout.tsx`: font tự lưu trữ, ngôn ngữ HTML và metadata.
- `src/app/globals.css`: hệ màu, bố cục, responsive và hiệu ứng.
- `skills/stitch/SKILL.md`: skill thiết kế tự tạo, có thể tái sử dụng; không phải Google Stitch MCP chính thức.

Menu di động, chuyển ngôn ngữ, điều hướng section và FAQ hoạt động ngay trong landing page. Các CTA đăng ký và Explorer dẫn tới ứng dụng tham chiếu, không giả lập thao tác ghi dữ liệu. Không có backend thu thập thông tin liên hệ hay ví trong dự án này.

## Nội dung và hình ảnh

- Nội dung sản phẩm, loại bằng chứng, đường dẫn và trạng thái **Solana Devnet** được đối chiếu với trang tham chiếu ngày 16/09/2026. Hồ sơ hiển thị trong hero là minh họa, không phải dữ liệu thật.
- Ảnh cảnh quan: [Unsplash image source](https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85), lưu tại `public/images/farm-landscape.jpg`. Ảnh minh họa cảnh quan nông nghiệp, không đại diện cho một nông trại Việt Nam cụ thể.
- Nhận diện OpenAgriX dùng bộ logo trong `public/`: wordmark màu `logo.png`, wordmark trắng `logo-dark.png`, biểu tượng `logo-icon.png` / `logo-icon.svg`, và favicon. Header và footer dùng wordmark màu; biểu tượng xuất hiện trên thẻ hồ sơ minh họa. Next.js tạo metadata từ `src/app/icon.png`, `src/app/apple-icon.png` và `src/app/favicon.ico`. Bảng màu chính theo thương hiệu: Deep Forest Green `#004C3F` và OpenAgri green `#159447`.
- Font Plus Jakarta Sans được cung cấp qua `@fontsource/plus-jakarta-sans`, gồm bộ ký tự tiếng Việt; ứng dụng không gọi Google Fonts khi chạy hoặc build.

## Triển khai

Có thể triển khai dự án Next.js lên Vercel hoặc máy chủ Node.js bằng `npm run build` và `npm start`. Dự án chưa được tự động xuất bản. Sau khi có domain chính thức, bổ sung `metadataBase` và canonical URL tương ứng trong layout nếu cần.

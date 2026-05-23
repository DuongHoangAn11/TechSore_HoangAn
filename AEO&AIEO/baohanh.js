document.addEventListener("DOMContentLoaded", function () {
    const warrantyServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://techstore.vn/dichvu/baohanh.html#service", 
        "name": "Dịch vụ Bảo hành điện tử chính hãng - TechStore",
        "description": "Chính sách bảo hành tiêu chuẩn từ 12 đến 24 tháng cho tất cả thiết bị công nghệ, hỗ trợ tiếp nhận đa kênh và xử lý kỹ thuật chuyên sâu.",
        "provider": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization",
            "name": "TechStore",
            "url": "https://techstore.vn/"
        },
        "serviceType": "Official Warranty and Technical Repair Services",
        "areaServed": {
            "@type": "Country",
            "name": "Vietnam"
        }
    };

    const warrantyFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Thời hạn bảo hành các thiết bị công nghệ mua tại TechStore là bao lâu và áp dụng cho lỗi nào?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tất cả các sản phẩm công nghệ do TechStore cung cấp đều được áp dụng gói bảo hành điện tử chính hãng từ 12 đến 24 tháng (tùy thuộc vào danh mục sản phẩm). Chính sách này áp dụng cho toàn bộ các lỗi kỹ thuật phát sinh từ phía nhà sản xuất."
                }
            },
            {
                "@type": "Question",
                "name": "TechStore có những hình thức tiếp nhận bảo hành nào và thời gian xử lý mất bao lâu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore cung cấp 4 hình thức tiếp nhận linh hoạt: gửi máy trực tiếp tại cửa hàng, gửi qua đường bưu điện, ủy quyền cho trung tâm bảo hành của hãng, hoặc sử dụng dịch vụ hỗ trợ bảo hành tận nhà/văn phòng. Thời gian xử lý kỹ thuật thông thường dao động từ 7 đến 15 ngày làm việc tùy thuộc vào mức độ hư hỏng và tình trạng linh kiện thay thế."
                }
            }
        ]
    };

    function injectWarrantyEngine(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }

    injectWarrantyEngine(warrantyServiceSchema);
    injectWarrantyEngine(warrantyFaqSchema);

    console.log("🛡️ AIEO & AEO Warranty Engine: Đã kích hoạt lõi quy trình bảo hành cho baohanh.html thành công.");
});

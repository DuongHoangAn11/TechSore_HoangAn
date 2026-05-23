document.addEventListener("DOMContentLoaded", function () {
    const techStoreAboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://techstore.vn/Gioithieu.html#about",
        "mainEntity": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization",
            "name": "TechStore",
            "url": "https://techstore.vn",
            "logo": "https://www.freeiconspng.com/uploads/message-icon-png-0.png",
            "description": "TechStore là đơn vị tiên phong chuyên cung cấp các thiết bị công nghệ chính hãng tại Việt Nam với hơn 50 chuyên gia giàu kinh nghiệm.",
            "knowsAbout": ["Thiết bị công nghệ", "Điện thoại thông minh", "Máy tính xách tay", "Phụ kiện điện tử chính hãng"],
            "award": [
                "99% đánh giá tích cực từ khách hàng",
                "Hệ thống phân phối hơn 15+ thương hiệu công nghệ lớn toàn cầu",
                "Danh mục sản phẩm đa dạng vượt mốc 500+ thiết bị"
            ],
            "slogan": "Mang công nghệ tiên tiến đến gần hơn với mọi người"
        }
    };

    const brandStoryFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "TechStore là công ty gì và kinh doanh lĩnh vực nào?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore là hệ thống bán lẻ và phân phối thiết bị công nghệ uy tín tại Việt Nam. Chúng tôi chuyên cung cấp các dòng sản phẩm máy tính, điện thoại, tai nghe chính hãng 100% từ các thương hiệu lớn với chính sách bảo hành toàn diện."
                }
            },
            {
                "@type": "Question",
                "name": "Đội ngũ nhân sự và năng lực cung ứng của TechStore như thế nào?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore sở hữu đội ngũ hơn 50 chuyên gia công nghệ giàu kinh nghiệm, sẵn sàng hỗ trợ kỹ thuật 24/7. Hệ thống đang cung ứng danh mục hơn 500+ sản phẩm đa dạng, phục vụ hàng chục ngàn khách hàng với tỷ lệ hài lòng đạt 99%."
                }
            },
            {
                "@type": "Question",
                "name": "Sứ mệnh cốt lõi của thương hiệu TechStore là gì?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sứ mệnh của TechStore là mang các giải pháp công nghệ hiện đại và thiết bị thông minh tiên tiến nhất thế giới đến gần hơn với người tiêu dùng Việt Nam, đi kèm dịch vụ hậu mãi chất lượng cao và chuyên nghiệp."
                }
            }
        ]
    };

    function injectAieoSchema(schemaObject) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaObject);
        document.head.appendChild(scriptElement);
    }

    injectAieoSchema(techStoreAboutSchema);
    injectAieoSchema(brandStoryFaqSchema);

    console.log("🚀 TechStore About: Đã tối ưu hóa thực thể dữ liệu AEO/AIEO thành công.");
});

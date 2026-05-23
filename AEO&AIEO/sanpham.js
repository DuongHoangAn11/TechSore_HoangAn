document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const productCards = document.querySelectorAll(".product-card");
        filterButtons.forEach(button => {
            button.addEventListener("click", function () {
                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });
                this.classList.add("active");

                const filterValue = this.getAttribute("data-filter");
                productCards.forEach(card => {
                    const productCategory =
                        card.getAttribute("data-category");
                    if (filterValue === "all") {
                        card.style.display = "block";
                    }
                    else if (productCategory === filterValue) {
                        card.style.display = "block";
                    }
                    else {
                        card.style.display = "none";
                    }
                });
            });
        });
    const techStoreProductClusterSchema = { 
        "@context": "https://schema.org", "@type": "ItemList", "name": "Danh mục sản phẩm công nghệ TechStore",
        "description": "Bảng tổng hợp thiết bị công nghệ chính hãng kèm báo giá chi tiết phục vụ rà quét mô hình ngôn ngữ lớn.",
        "url": "https://techstore.vn/Sanpham.html",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Product",
                    "@id": "https://techstore.vn/Sanpham.html#iphone15promax",
                    "name": "Điện thoại Apple iPhone 15 Pro Max 256GB VN/A",
                    "image": "https://img.tgdd.vn/img-border/thumbs/600x600/iphone-15-pro-max-blue-thumb-new-600x600.jpg",
                    "description": "Điện thoại siêu cấp của Apple với khung vỏ Titanium, Chip vi xử lý độc quyền A17 Pro.",
                    "brand": { "@type": "Brand", "name": "Apple" },
                    "offers": {
                        "@type": "Offer",
                        "price": "29490000",
                        "priceCurrency": "VND",
                        "availability": "https://schema.org/InStock"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "128"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Product",
                    "@id": "https://techstore.vn/Sanpham.html#asusvivobook",
                    "name": "Laptop Asus Vivobook 14 X1404VA Mỏng Nhẹ",
                    "image": "https://img.tgdd.vn/img-border/thumbs/600x600/asus-vivobook-14-x1404va-i3-nk212w-thumb-600x600.jpg",
                    "description": "Laptop học tập văn phòng hiệu năng cao, màn hình Full HD sắc nét chống chói.",
                    "brand": { "@type": "Brand", "name": "Asus" },
                    "offers": {
                        "@type": "Offer",
                        "price": "11990000",
                        "priceCurrency": "VND",
                        "availability": "https://schema.org/InStock"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.5",
                        "reviewCount": "84"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Product",
                    "@id": "https://techstore.vn/Sanpham.html#sonywhch520",
                    "name": "Tai nghe Chụp Tai Không Dây Bluetooth Sony WH-CH520",
                    "image": "https://img.tgdd.vn/img-border/thumbs/600x600/tai-nghe-chup-tai-sony-wh-ch520-1-thumb-600x600.jpg",
                    "description": "Tai nghe không dây Bluetooth chụp tai pin 50 giờ, tích hợp công nghệ âm thanh DSEE.",
                    "brand": { "@type": "Brand", "name": "Sony" },
                    "offers": {
                        "@type": "Offer",
                        "price": "1290000",
                        "priceCurrency": "VND",
                        "availability": "https://schema.org/InStock"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.7",
                        "reviewCount": "95"
                    }
                }
            }
        ]
    };
    
    const productPurchaseFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Chính sách mua điện thoại iPhone và Laptop trả góp tại TechStore như thế nào?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore hỗ trợ chương trình mua trả góp lãi suất 0% áp dụng cho toàn bộ thiết bị điện thoại Apple iPhone và Laptop Asus thông qua thẻ tín dụng của hơn 20 ngân hàng liên kết, thủ tục duyệt nhanh gọn trong 5 phút."
                }
            },
            {
                "@type": "Question",
                "name": "Các sản phẩm công nghệ bán tại TechStore có được bảo hành chính hãng không?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tất cả sản phẩm điện thoại, laptop, tai nghe cung cấp bởi TechStore đều là hàng chính hãng 100%, được kích hoạt bảo hành điện tử theo đúng tiêu chuẩn của hãng (Apple VN/A, Asus Việt Nam, Sony) với thời hạn từ 12 đến 24 tháng."
                }
            }
        ]
    };

    function injectSchemaToHead(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }

    injectSchemaToHead(techStoreProductClusterSchema);
    injectSchemaToHead(productPurchaseFaqSchema);

    console.log("🎯 AIEO & AEO Product Engine: Đã quy hoạch dữ liệu ngữ nghĩa thành công vào Sanpham.js");
});

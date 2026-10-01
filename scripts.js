/**
 * ROAA MOHAMED — PACKAGING DESIGNER PORTFOLIO
 * Vanilla JavaScript: Bilingual Engine, Theme Switcher, Accessible Mobile Nav,
 * Scroll Reveal (IntersectionObserver), Ambient Parallax, and Contact Validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. BILINGUAL TRANSLATIONS DICTIONARY
  // --------------------------------------------------------------------------
  const i18n = {
    en: {
      skip_link: "Skip to main content",
      nav_tagline: "Packaging Designer",
      nav_home: "Home",
      nav_about: "About Me",
      nav_education: "Education",
      nav_skills: "Skills",
      nav_experience: "Work Experience",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_achievements: "Achievements",
      nav_testimonials: "Testimonials",
      nav_contact: "Get in Touch",

      // Hero
      hero_badge: "PACKAGING DESIGNER",
      hero_role: "Packaging Designer & Visual Creative",
      hero_bio: "I create thoughtful packaging and visual experiences that combine creativity, functionality, and strong brand storytelling.",
      domain_packaging: "Packaging Design",
      domain_branding: "Branding",
      domain_graphic: "Graphic Design",
      domain_motion: "Motion Graphics",
      domain_print: "Print & Prepress",
      hero_cta_primary: "View My Work",
      hero_cta_secondary: "Let's Work Together",
      hero_floating_tag: "Dieline & Structural Form",
      hero_floating_cmyk: "Offset Prepress Ready",

      // About
      about_eyebrow: "Visual Storyteller & Print Specialist",
      about_heading: "About Me",
      about_subheading: "Designing with Structure, Purpose, and Emotion",
      about_p1: "I'm Roaa Mohamed, a Packaging Designer with a passion for creating visual identities and packaging experiences that are both beautiful and functional.",
      about_p2: "My background in Printing, Publishing & Packaging has helped me understand design not only from a visual perspective, but also from a practical and production-focused point of view.",
      about_p3: "I enjoy turning ideas into thoughtful visual solutions while paying close attention to details, materials, structure, and print execution.",
      about_specialties_title: "Specialties & Expertise",
      spec_packaging: "Packaging Design",
      spec_brand: "Brand Identity",
      spec_print: "Print Design",
      spec_prepress: "Prepress",
      spec_viscom: "Visual Communication",
      spec_creative: "Creative Direction",
      about_cta: "Explore My Skills",

      // Education
      education_eyebrow: "Academic Background",
      education_heading: "Education",
      edu_period: "2023 — 2028",
      edu_university: "Capital University",
      edu_faculty: "Faculty of Applied Arts",
      edu_dept: "Printing, Publishing & Packaging Department",
      edu_desc: "Studying design with a focus on packaging, printing, publishing, production processes, and visual communication.",
      edu_tag1: "Packaging Engineering",
      edu_tag2: "Offset & Digital Print",
      edu_tag3: "Material Science",
      edu_tag4: "Publishing Tech",

      // Skills
      skills_eyebrow: "Capabilities & Competencies",
      skills_heading: "Skills & Tools",
      skill_cat_packaging: "Packaging Design",
      skill_p1: "Structural Packaging",
      skill_p2: "Dielines",
      skill_p3: "Packaging Accessories",
      skill_p4: "Packaging Concepts",
      skill_p5: "Mockups",
      skill_p6: "Print-Ready Artwork",
      skill_cat_graphic: "Graphic Design",
      skill_g1: "Branding",
      skill_g2: "Visual Identity",
      skill_g3: "Social Media Design",
      skill_g4: "Layout Design",
      skill_g5: "Typography",
      skill_cat_motion: "Motion Graphics",
      skill_m1: "2D Motion Graphics",
      skill_m2: "Animation",
      skill_m3: "Visual Storytelling",
      skill_cat_print: "Print & Prepress",
      skill_pr1: "Prepress",
      skill_pr2: "Color Separation",
      skill_pr3: "Offset Printing",
      skill_pr4: "Production Preparation",
      skill_cat_software: "Software & Tools",

      // Experience
      exp_eyebrow: "Professional Journey",
      exp_heading: "Work Experience",
      exp1_role: "Independent Practice",
      exp1_period: "Ongoing",
      exp1_title: "Freelance Packaging & Graphic Designer",
      exp1_desc: "Working on packaging, branding, social media graphics, print-ready artwork, and visual design projects while developing creative solutions tailored to each project's needs.",
      exp1_t1: "Packaging Solutions",
      exp1_t2: "Brand Development",
      exp1_t3: "Prepress Delivery",
      exp2_org: "Jetpack",
      exp2_duration: "4 Weeks",
      exp2_title: "Packaging Design Training",
      exp2_field: "Field: Packaging Design & Offset Prepress",
      exp2_topics_label: "Covered Topics:",
      exp2_top1: "Structural Packaging Design",
      exp2_top2: "Dielines",
      exp2_top3: "Packaging Accessories",
      exp2_top4: "Adobe Illustrator Workflow",
      exp2_top5: "Prepress",
      exp2_top6: "Color Separation",
      exp2_top7: "Offset Printing",
      exp3_org: "National Telecommunication Institute",
      exp3_duration: "120 Hours",
      exp3_title: "2D Motion Graphics Summer Training",
      exp3_desc: "Technical training in 2D Motion Graphics combined with freelancing fundamentals.",
      exp3_t1: "2D Keyframing",
      exp3_t2: "Visual Storyboarding",
      exp3_t3: "Freelance Practices",

      // Services
      services_eyebrow: "What I Offer",
      services_heading: "Services",
      services_subtitle: "Creative solutions designed to make your brand stand out.",
      srv1_title: "Packaging Design",
      srv1_desc: "Creative and functional packaging concepts designed to communicate the brand and create a memorable product experience.",
      srv2_title: "Brand Identity",
      srv2_desc: "Visual identity systems that create consistency and strengthen brand recognition.",
      srv3_title: "Graphic Design",
      srv3_desc: "Social media graphics, promotional materials, layouts, and visual communication assets.",
      srv4_title: "Print-Ready Artwork",
      srv4_desc: "Professionally prepared artwork with attention to production requirements and print details.",
      srv5_title: "Motion Graphics",
      srv5_desc: "Simple and engaging motion graphics that bring visual ideas to life.",
      srv6_title: "Packaging Mockups",
      srv6_desc: "Realistic presentation mockups that showcase packaging concepts professionally.",

      // Projects
      proj_eyebrow: "Curated Portfolio",
      proj_heading: "Selected Projects",
      proj_subtitle: "A selection of creative projects exploring packaging, branding, visual storytelling, and product experiences.",
      view_project: "View Project",

      proj1_tag: "Interactive Unboxing",
      proj1_cat: "Category: Interactive Packaging",
      proj1_title: "Maqam Al Oud",
      proj1_sub: "Aromatic Incense Set",
      proj1_desc: "A luxury interactive incense gift set combining traditional Arabic aesthetics with an engaging unboxing experience.",

      proj2_tag: "Botanical System",
      proj2_cat: "Category: Brand Identity & Skincare",
      proj2_title: "Natureve",
      proj2_sub: "Botanical Skincare Line",
      proj2_desc: "A natural skincare identity built around an elegant botanical visual language and refined earthy tones.",

      proj3_tag: "Structural Surprise",
      proj3_cat: "Category: Gift Packaging",
      proj3_title: "Polaroid Pop-Up Camera",
      proj3_sub: "Interactive Gift Experience",
      proj3_desc: "An interactive camera-inspired gift package designed around joy, memories, and the idea that packaging can become part of the experience.",

      proj4_tag: "Herbal Rebrand",
      proj4_cat: "Category: Brand Identity",
      proj4_title: "Roots",
      proj4_sub: "Herbal Tea & Organic Culture",
      proj4_desc: "A visual identity rebranding concept inspired by herbs, natural ingredients, tea culture, and organic visual elements.",

      proj5_tag: "Playful Newborn Care",
      proj5_cat: "Category: Newborn Packaging",
      proj5_title: "Kidia",
      proj5_sub: "Infant Care Experience",
      proj5_desc: "A playful and thoughtful packaging concept created for a newborn-focused product experience.",

      proj6_tag: "Kinetic Geometry",
      proj6_cat: "Category: Product & Packaging Concept",
      proj6_title: "Optical Illusion Planter",
      proj6_sub: "Geometric Structural Experience",
      proj6_desc: "A creative product concept using optical illusion principles to create a distinctive visual experience.",

      // Achievements
      achieve_eyebrow: "Qualifications & Recognition",
      achieve_heading: "Achievements & Certificates",
      cert_image_caption: "Certificate Image",
      view_cert: "View Certificate",
      cert1_title: "2D Motion Graphics Summer Training",
      cert1_org: "National Telecommunication Institute",
      cert1_meta: "120 Hours",
      cert2_title: "Packaging Design & Offset Prepress",
      cert2_org: "Jetpack",
      cert2_meta: "4 Weeks",
      cert3_title: "Adobe / Design Training",
      cert3_org: "Professional Design Academy",
      cert3_meta: "Certificate Credential",
      cert4_title: "Creative Design Achievement",
      cert4_org: "Faculty Exhibition & Showcase",
      cert4_meta: "Honorary Mention",

      // Testimonials
      testi_eyebrow: "Client Feedback",
      testi_heading: "What People Say",
      testi_text_1: "\"I had the pleasure of working with Roaa, and I can confidently say that she is a talented, dedicated, and reliable person. She is creative, professional, and highly attentive to detail, always making sure that her work is polished and well thought out. She is also eager to learn, open to feedback, and committed to delivering high-quality work.",
      testi_text_2: "I highly recommend her to anyone looking for a talented and detail-oriented professional.\"",
      testi_author: "Ehsan Maher",
      testi_role: "Graphic & Packaging Designer | Branding | Motion Graphics",
      testi_relation: "Colleague",

      // Contact
      contact_eyebrow: "Start a Conversation",
      contact_heading: "Let's Create Something Together",
      contact_sub: "Have a project, collaboration, or idea in mind? I'd love to hear about it.",
      contact_info_title: "Contact Information",
      contact_info_desc: "Available for freelance packaging commissions, brand identity collaborations, and production consulting.",
      contact_loc_label: "Location",
      contact_loc_val: "Cairo, Egypt",
      contact_email_label: "Email Inquiry",
      contact_whatsapp_label: "WhatsApp",
      contact_avail_label: "Availability",
      contact_avail_val: "Freelance & Design Internships",
      contact_socials_title: "Connect Online",

      form_name_label: "Your Name",
      form_name_placeholder: "e.g. Sarah Jenkins",
      form_email_label: "Email Address",
      form_email_placeholder: "e.g. sarah@company.com",
      form_subject_label: "Subject",
      form_subject_placeholder: "e.g. Packaging Design Collaboration",
      form_msg_label: "Message",
      form_msg_placeholder: "Tell me about your product, timeline, and packaging vision...",
      form_submit_btn: "Send Message",
      form_success_msg: "Thank you! Your message has been received.",
      form_error_fill: "Please fill in all required fields properly.",
      form_error_email: "Please enter a valid email address.",

      // Footer
      footer_title: "Packaging Designer",
      footer_tagline: "Specializing in packaging, branding, graphic design, motion graphics, and print-ready design.",
      footer_nav_title: "Navigation",
      footer_social_title: "Connect",
      footer_copyright: "© 2026 Roaa Mohamed. All rights reserved.",
      footer_credit: "Crafted with care for packaging innovation & print excellence."
    },

    ar: {
      skip_link: "التخطي إلى المحتوى الرئيسي",
      nav_tagline: "مصممة تغليف",
      nav_home: "الرئيسية",
      nav_about: "عنّي",
      nav_education: "التعليم",
      nav_skills: "المهارات",
      nav_experience: "الخبرات",
      nav_services: "الخدمات",
      nav_projects: "المشاريع",
      nav_achievements: "الإنجازات",
      nav_testimonials: "آراء العملاء",
      nav_contact: "تواصل معي",

      // Hero
      hero_badge: "تصميم التغليف",
      hero_role: "مصممة تغليف ومبدعة بصرية",
      hero_bio: "أبتكر حلول وتجارب تغليف بصرية مدروسة تجمع بين الإبداع، الوظيفية، والسرد القصصي المميز للعلامة التجارية.",
      domain_packaging: "تصميم التغليف",
      domain_branding: "الهوية البصرية",
      domain_graphic: "التصميم الجرافيكي",
      domain_motion: "الرسوم المتحركة",
      domain_print: "الطباعة وتجهيز ما قبل الطباعة",
      hero_cta_primary: "استكشف أعمالي",
      hero_cta_secondary: "لنعمل معاً",
      hero_floating_tag: "سكاكين التكسير والإنشاء الهيكلي",
      hero_floating_cmyk: "جاهز لطباعة الأوفست CMYK",

      // About
      about_eyebrow: "سرد قصصي بصري وخبرة طباعية",
      about_heading: "عنّي",
      about_subheading: "التصميم بهيكل إنشائي، هدف واضح، ولمسة شعورية",
      about_p1: "أنا رُؤى محمد، مصممة تغليف ولدي شغف كبير بابتكار هويات بصرية وتجارب تغليف تجمع بين الجمال والفاعلية الوظيفية.",
      about_p2: "ساعدتني دراستي في قسم الطباعة والنشر والتغليف على فهم التصميم ليس فقط من منظور جمالي بصري، بل ومن زاوية تطبيقية واقعية تركز على خطوط الإنتاج والطباعة.",
      about_p3: "أستمتع بتحويل الأفكار إلى حلول بصرية مدروسة مع الاهتمام الدقيق بأدق التفاصيل، واختيار الخامات، والهيكل الإنشائي، وجودة التنفيذ الطباعي.",
      about_specialties_title: "التخصصات ومجالات الخبرة",
      spec_packaging: "تصميم التغليف",
      spec_brand: "الهوية البصرية",
      spec_print: "تصميم المطبوعات",
      spec_prepress: "ما قبل الطباعة",
      spec_viscom: "التواصل البصري",
      spec_creative: "الإدارة الإبداعية",
      about_cta: "استكشف مهاراتي",

      // Education
      education_eyebrow: "المسيرة الأكاديمية",
      education_heading: "التعليم",
      edu_period: "٢٠٢٣ — ٢٠٢٨",
      edu_university: "جامعة العاصمة (Capital University)",
      edu_faculty: "كلية الفنون التطبيقية",
      edu_dept: "قسم الطباعة والنشر والتغليف",
      edu_desc: "دراسة التصميم مع التركيز على التغليف، والطباعة، والنشر، وعمليات الإنتاج، والتواصل البصري.",
      edu_tag1: "هندسة التغليف",
      edu_tag2: "طباعة الأوفست والرقمية",
      edu_tag3: "علوم الخامات والورق",
      edu_tag4: "تقنيات النشر",

      // Skills
      skills_eyebrow: "القدرات والإمكانيات",
      skills_heading: "المهارات والأدوات",
      skill_cat_packaging: "تصميم التغليف",
      skill_p1: "التغليف الإنشائي",
      skill_p2: "سكاكين وتكسير العلب (Dielines)",
      skill_p3: "إكسسوارات وحشوات التغليف",
      skill_p4: "مفاهيم التغليف الإبداعية",
      skill_p5: "النماذج والموك آب (Mockups)",
      skill_p6: "ملفات جاهزة للتنفيذ والطباعة",
      skill_cat_graphic: "التصميم الجرافيكي",
      skill_g1: "بناء العلامات التجارية (Branding)",
      skill_g2: "الهوية البصرية المتكاملة",
      skill_g3: "تصميمات منصات التواصل",
      skill_g4: "تنسيق وتخطيط المطبوعات",
      skill_g5: "فن وتصميم التيبوغرافي",
      skill_cat_motion: "الرسوم المتحركة (موشن)",
      skill_m1: "موشن جرافيك ثنائي الأبعاد",
      skill_m2: "التحريك والتوقيت",
      skill_m3: "السرد القصصي البصري",
      skill_cat_print: "الطباعة وتجهيز ما قبل الطباعة",
      skill_pr1: "تجهيز ملفات ما قبل الطباعة",
      skill_pr2: "فصل الألوان (Color Separation)",
      skill_pr3: "طباعة الأوفست",
      skill_pr4: "الإعداد والمتابعة الإنتاجية",
      skill_cat_software: "البرامج والأدوات",

      // Experience
      exp_eyebrow: "المسار المهني",
      exp_heading: "الخبرات العملية",
      exp1_role: "عمل حر مستقل",
      exp1_period: "مستمر",
      exp1_title: "مصممة تغليف وجرافيك مستقلة",
      exp1_desc: "العمل على مشاريع تصميم التغليف، وبناء الهويات البصرية، ورسوم منصات التواصل، وتجهيز الملفات الطباعية، وتطوير حلول إبداعية مخصصة لاحتياجات كل عميل.",
      exp1_t1: "حلول التغليف",
      exp1_t2: "تطوير الهويات",
      exp1_t3: "تسليمات الطباعة",
      exp2_org: "جيت باك (Jetpack)",
      exp2_duration: "٤ أسابيع",
      exp2_title: "تدريب تصميم التغليف وما قبل الطباعة",
      exp2_field: "المجال: تصميم التغليف وتجهيز طباعة الأوفست",
      exp2_topics_label: "المحاور المغطاة:",
      exp2_top1: "تصميم التغليف الإنشائي",
      exp2_top2: "سكاكين التكسير والداي لاين",
      exp2_top3: "إكسسوارات وحشوات التغليف",
      exp2_top4: "سير العمل في Adobe Illustrator",
      exp2_top5: "مراحل ما قبل الطباعة",
      exp2_top6: "فصل الألوان",
      exp2_top7: "طباعة الأوفست الصناعية",
      exp3_org: "المعهد القومي للاتصالات (NTI)",
      exp3_duration: "١٢٠ ساعة",
      exp3_title: "تدريب صيفي في الرسوم المتحركة ثنائية الأبعاد",
      exp3_desc: "تدريب تقني متقدم في موشن جرافيك 2D مع مبادئ واحتراف العمل الحر.",
      exp3_t1: "التحريك الإطاري",
      exp3_t2: "الستوري بورد البصري",
      exp3_t3: "ممارسات العمل الحر",

      // Services
      services_eyebrow: "ما أقدمه لك",
      services_heading: "الخدمات",
      services_subtitle: "حلول إبداعية مصممة لتجعل علامتك التجارية تتألق وتتميز.",
      srv1_title: "تصميم التغليف",
      srv1_desc: "أفكار تغليف مبتكرة ووظيفية صُممت للتعبير عن هوية العلامة وصناعة تجربة فتح عبوة لا تُنسى.",
      srv2_title: "الهوية البصرية",
      srv2_desc: "أنظمة هوية بصرية متكاملة تبني الاتساق وتعزز الحضور الذهني للعلامة التجارية.",
      srv3_title: "التصميم الجرافيكي",
      srv3_desc: "تصاميم منصات التواصل، والمواد الترويجية، وتنسيق الكتيبات والمطبوعات الإعلانية.",
      srv4_title: "ملفات جاهزة للطباعة",
      srv4_desc: "إعداد احترافي للملفات الطباعية مع مراعاة كاملة لمتطلبات الإنتاج ودقة خامات الطباعة.",
      srv5_title: "موشن جرافيك",
      srv5_desc: "رسوم متحركة جذابة وسلسة تبث الحياة في الأفكار والمفاهيم البصرية.",
      srv6_title: "موك آب التغليف",
      srv6_desc: "نماذج عرض رقمية واقعية وعالية الجودة لإظهار تصميم العبوات بأعلى درجات الاحترافية.",

      // Projects
      proj_eyebrow: "أعمال مختارة",
      proj_heading: "المشاريع المختارة",
      proj_subtitle: "تشكيلة من المشاريع الإبداعية تستكشف التغليف، والهوية، والسرد القصصي، وتجارب المنتجات.",
      view_project: "عرض المشروع",

      proj1_tag: "فتح صندوق تفاعلي",
      proj1_cat: "التصنيف: تغليف تفاعلي",
      proj1_title: "مقام العود",
      proj1_sub: "طقم بخور عطري فاخر",
      proj1_desc: "طقم هدايا بخور فاخر وتفاعلي يجمع بين الطابع العربي الأصيل وتجربة فتح صندوق ممتعة ومميزة.",

      proj2_tag: "نظام نباتي متكامل",
      proj2_cat: "التصنيف: هوية تجارية وعناية بالبشرة",
      proj2_title: "ناتيوريف (Natureve)",
      proj2_sub: "مجموعة العناية الطبيعية",
      proj2_desc: "هوية منتجات طبيعية للعناية بالبشرة مبنية على لغة بصرية نباتية راقية وألوان ترابية هادئة.",

      proj3_tag: "مفاجأة إنشائية",
      proj3_cat: "التصنيف: تغليف هدايا",
      proj3_title: "كاميرا بولارويد التفاعلية",
      proj3_sub: "تجربة هدية تفاعلية",
      proj3_desc: "عبوة هدايا تفاعلية مستوحاة من الكاميرا الكلاسيكية صممت حول البهجة والذكريات لتكون العبوة جزءاً من التجربة.",

      proj4_tag: "إعادة بناء هوية عشبية",
      proj4_cat: "التصنيف: هوية علامة تجارية",
      proj4_title: "رووتس (Roots)",
      proj4_sub: "شاي الأعشاب وثقافة الطبيعة",
      proj4_desc: "مفهوم إعادة صياغة الهوية البصرية مستوحى من الأعشاب، والمكونات الطبيعية، وثقافة الشاي، والعناصر العضوية.",

      proj5_tag: "رعاية لطيفة لحديثي الولادة",
      proj5_cat: "التصنيف: تغليف منتجات المواليد",
      proj5_title: "كيدِيا (Kidia)",
      proj5_sub: "تجربة عناية بالمولود",
      proj5_desc: "فكرة تغليف مرحة ومدروسة صُممت لتقديم تجربة دافئة ومحببة لمنتجات الأطفال حديثي الولادة.",

      proj6_tag: "هندسة حركية",
      proj6_cat: "التصنيف: مفهوم المنتج والتغليف",
      proj6_title: "أصيص الخداع البصري",
      proj6_sub: "تجربة هيكلية هندسية",
      proj6_desc: "مفهوم إبداعي لمنتج وتغليفه يستند إلى قواعد الخداع البصري والطي الإنشائي لابتكار تجربة بصرية فريدة.",

      // Achievements
      achieve_eyebrow: "المؤهلات والشهادات",
      achieve_heading: "الإنجازات والشهادات",
      cert_image_caption: "صورة الشهادة",
      view_cert: "عرض الشهادة",
      cert1_title: "تدريب صيفي في الرسوم المتحركة 2D",
      cert1_org: "المعهد القومي للاتصالات",
      cert1_meta: "١٢٠ ساعة تدريبية",
      cert2_title: "تصميم التغليف وتجهيز طباعة الأوفست",
      cert2_org: "جيت باك (Jetpack)",
      cert2_meta: "٤ أسابيع مكثفة",
      cert3_title: "اعتماد برامج Adobe وتصميم التغليف",
      cert3_org: "أكاديمية التصميم الاحترافية",
      cert3_meta: "اعتماد تدريبي مهني",
      cert4_title: "تكريم الإنجاز في التصميم الإبداعي",
      cert4_org: "معرض ومشاريع الفنون التطبيقية",
      cert4_meta: "تميز في الفكرة والإنشاء",

      // Testimonials
      testi_eyebrow: "آراء وانطباعات",
      testi_heading: "ماذا يقول العملاء",
      testi_text_1: "\"تشرفت بالعمل مع رُؤى، ويمكنني أن أؤكد بثقة أنها شخصية موهوبة ومجتهدة وموثوقة. تتميز بالإبداع والاحتراف والاهتمام الشديد بالتفاصيل، وتحرص دائماً على أن يكون عملها متقناً ومدروساً بعناية. كما أنها حريصة على التعلم، ومنفتحة على الملاحظات، وملتزمة بتقديم عمل عالي الجودة.",
      testi_text_2: "أوصي بها بشدة لكل من يبحث عن شخصية موهوبة ودقيقة في عملها.\"",
      testi_author: "إحسان ماهر",
      testi_role: "مصمم جرافيك وتغليف | هوية بصرية | موشن جرافيك",
      testi_relation: "زميل عمل",

      // Contact
      contact_eyebrow: "ابدأ محادثة",
      contact_heading: "لنبتكر شيئاً استثنائياً معاً",
      contact_sub: "هل لديك مشروع، تعاون إبداعي، أو فكرة ترغب في تحويلها إلى واقع؟ يسعدني التواصل معك.",
      contact_info_title: "معلومات التواصل",
      contact_info_desc: "متاحة لتصميم مشاريع التغليف، وتطوير الهويات البصرية، والاستشارات الطباعية والإنتاجية.",
      contact_loc_label: "الموقع",
      contact_loc_val: "القاهرة، مصر",
      contact_email_label: "البريد الإلكتروني",
      contact_whatsapp_label: "واتساب",
      contact_avail_label: "حالة التوفر",
      contact_avail_val: "مشاريع العمل الحر وفرص التدريب",
      contact_socials_title: "تواصل عبر المنصات",

      form_name_label: "الاسم الكريم",
      form_name_placeholder: "مثال: سارة أحمد",
      form_email_label: "البريد الإلكتروني",
      form_email_placeholder: "مثال: sarah@company.com",
      form_subject_label: "موضوع الرسالة",
      form_subject_placeholder: "مثال: طلب تصميم هوية وتغليف منتج",
      form_msg_label: "تفاصيل المشروع",
      form_msg_placeholder: "حدثني عن منتجك، الجدول الزمني، والرؤية التي تطمح إليها...",
      form_submit_btn: "إرسال الرسالة",
      form_success_msg: "شكراً لك! تم استلام رسالتك بنجاح وسأتواصل معك قريباً.",
      form_error_fill: "يرجى ملء جميع الحقول المطلوبة بشكل صحيح.",
      form_error_email: "يرجى إدخال عنوان بريد إلكتروني صحيح." ,

      // Footer
      footer_title: "مصممة تغليف",
      footer_tagline: "متخصصة في تصميم التغليف، الهوية البصرية، الجرافيك، الموشن جرافيك، وإعداد ملفات الطباعة.",
      footer_nav_title: "روابط سريعة",
      footer_social_title: "تواصل",
      footer_copyright: "© ٢٠٢٦ رُؤى محمد. جميع الحقوق محفوظة.",
      footer_credit: "صُنع بعناية وشغف بالابتكار في هندسة التغليف وتميز الطباعة."
    }
  };

  // --------------------------------------------------------------------------
  // 2. THEME MANAGER (LIGHT / DARK)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const STORAGE_THEME_KEY = 'roaa_portfolio_theme';

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_THEME_KEY, theme);

    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    if (themeToggleBtn) {
      const isArabic = document.documentElement.getAttribute('lang') === 'ar';
      themeToggleBtn.setAttribute(
        'aria-label',
        theme === 'dark'
          ? (isArabic ? 'التبديل إلى الوضع الفاتح' : 'Switch to light mode')
          : (isArabic ? 'التبديل إلى الوضع الداكن' : 'Switch to dark mode')
      );
    }
  }

  // Initialize theme
  applyTheme(getPreferredTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Listen for system theme changes if user hasn't explicitly set one
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // --------------------------------------------------------------------------
  // 3. BILINGUAL LANGUAGE ENGINE (EN / AR)
  // --------------------------------------------------------------------------
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');
  const STORAGE_LANG_KEY = 'roaa_portfolio_lang';
  let updateTypingLanguage = () => {};

  function getSavedLanguage() {
    return localStorage.getItem(STORAGE_LANG_KEY) || 'en';
  }

  function applyLanguage(lang) {
    const isAr = lang === 'ar';
    const dict = i18n[lang] || i18n.en;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    localStorage.setItem(STORAGE_LANG_KEY, lang);

    // Update document title and description
    if (isAr) {
      document.title = "رُؤى محمد | مصممة تغليف وهويات بصرية";
    } else {
      document.title = "Roaa Mohamed | Packaging Designer";
    }

    // Toggle button display: shows opposite language code to indicate what clicking will switch to
    if (langLabel) {
      langLabel.textContent = isAr ? 'EN' : 'AR';
    }
    if (langToggleBtn) {
      langToggleBtn.setAttribute(
        'aria-label',
        isAr ? 'Switch language to English' : 'التبديل إلى اللغة العربية'
      );
    }

    // Update all text nodes with data-i18n
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update placeholder attributes
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Refresh theme button accessible label in the new language
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        'aria-label',
        currentTheme === 'dark'
          ? (isAr ? 'التبديل إلى الوضع الفاتح' : 'Switch to light mode')
          : (isAr ? 'التبديل إلى الوضع الداكن' : 'Switch to dark mode')
      );
    }

    updateTypingLanguage(dict);
  }

  // Initialize language
  applyLanguage(getSavedLanguage());

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('lang') || 'en';
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(nextLang);
    });
  }

  // --------------------------------------------------------------------------
  // 4. HERO DOMAIN TYPING EFFECT
  // --------------------------------------------------------------------------
  const typingWords = [
    'Packaging Design',
    'Branding',
    'Graphic Design',
    'Motion Graphics',
    'Print & Prepress'
  ];
  const typingWordKeys = [
    'domain_packaging',
    'domain_branding',
    'domain_graphic',
    'domain_motion',
    'domain_print'
  ];
  const typingText = document.getElementById('hero-typing-text');
  const typingReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let localizedTypingWords = [...typingWords];
  let typingWordIndex = 0;
  let typingCharacterIndex = 0;
  let isDeletingTypingWord = false;
  let typingTimer;

  function renderTypingText() {
    if (!typingText) return;

    const currentWord = localizedTypingWords[typingWordIndex] || '';
    typingText.textContent = currentWord.slice(0, typingCharacterIndex);
  }

  function runTypingEffect() {
    if (!typingText || typingReducedMotion.matches) return;

    const currentWord = localizedTypingWords[typingWordIndex] || '';
    const typingSpeed = isDeletingTypingWord ? 60 : 90;
    renderTypingText();

    if (!isDeletingTypingWord && typingCharacterIndex < currentWord.length) {
      typingCharacterIndex += 1;
      typingTimer = window.setTimeout(runTypingEffect, typingSpeed);
      return;
    }

    if (!isDeletingTypingWord && typingCharacterIndex === currentWord.length) {
      isDeletingTypingWord = true;
      typingTimer = window.setTimeout(runTypingEffect, 1500);
      return;
    }

    if (typingCharacterIndex > 0) {
      typingCharacterIndex -= 1;
      typingTimer = window.setTimeout(runTypingEffect, typingSpeed);
      return;
    }

    isDeletingTypingWord = false;
    typingWordIndex = (typingWordIndex + 1) % localizedTypingWords.length;
    typingTimer = window.setTimeout(runTypingEffect, 250);
  }

  updateTypingLanguage = (dict) => {
    localizedTypingWords = typingWordKeys.map((key, index) => dict[key] || typingWords[index]);
    typingWordIndex = Math.min(typingWordIndex, localizedTypingWords.length - 1);
    if (!isDeletingTypingWord) {
      typingCharacterIndex = 0;
    }
  };

  updateTypingLanguage(i18n[document.documentElement.getAttribute('lang')] || i18n.en);

  if (typingText && !typingReducedMotion.matches) {
    runTypingEffect();
  }

  // --------------------------------------------------------------------------
  // 5. POINTER DETAILS AND TESTIMONIAL REVEAL
  // --------------------------------------------------------------------------
  const canUsePointerEffects = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const interactiveCards = document.querySelectorAll('.project-card, .service-card, .skill-card, .achievement-card, .testimonial-card');

  if (canUsePointerEffects && !typingReducedMotion.matches) {
    let pointerFrame = null;

    document.addEventListener('pointermove', (event) => {
      if (pointerFrame) return;

      pointerFrame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
        pointerFrame = null;
      });
    }, { passive: true });

    interactiveCards.forEach((card) => {
      card.classList.add('interactive-card');

      card.addEventListener('pointerenter', () => {
        card.classList.add('is-pointer-active');
      });

      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        const tiltX = ((x - 50) / 50) * 1.2;
        const tiltY = ((50 - y) / 50) * 1.2;

        card.style.setProperty('--card-x', `${x}%`);
        card.style.setProperty('--card-y', `${y}%`);
        card.style.setProperty('--tilt-x', `${tiltX}deg`);
        card.style.setProperty('--tilt-y', `${tiltY}deg`);
      });

      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-pointer-active');
        card.style.removeProperty('--tilt-x');
        card.style.removeProperty('--tilt-y');
      });
    });
  }

  const testimonialCards = document.querySelectorAll('.testimonial-card');
  if (typingReducedMotion.matches || !('IntersectionObserver' in window)) {
    testimonialCards.forEach((card) => card.classList.add('testimonial-visible'));
  } else {
    const testimonialObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('testimonial-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    testimonialCards.forEach((card) => testimonialObserver.observe(card));
  }

  const timelines = document.querySelectorAll('.timeline');
  if (typingReducedMotion.matches || !('IntersectionObserver' in window)) {
    timelines.forEach((timeline) => timeline.classList.add('timeline-visible'));
  } else {
    const timelineObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    timelines.forEach((timeline) => timelineObserver.observe(timeline));
  }

  // --------------------------------------------------------------------------
  // 6. MOBILE NAVIGATION DRAWER
  // --------------------------------------------------------------------------
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const siteHeader = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu(forceState) {
    const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
    const nextState = typeof forceState === 'boolean' ? forceState : !isExpanded;

    mobileNavToggle.setAttribute('aria-expanded', String(nextState));
    if (nextState) {
      siteHeader.classList.add('nav-open');
    } else {
      siteHeader.classList.remove('nav-open');
    }
  }

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      toggleMobileMenu();
    });
  }

  // Close menu when clicking nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && siteHeader.classList.contains('nav-open')) {
      toggleMobileMenu(false);
      mobileNavToggle.focus();
    }
  });

  // --------------------------------------------------------------------------
  // 5. STICKY HEADER SHADOW ON SCROLL
  // --------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 6. ANIMATION MOTIF 03 — SCROLL REVEAL (IntersectionObserver)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // --------------------------------------------------------------------------
  // 7. ACTIVE NAVIGATION LINK ON SCROLL (SPY)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px'
    });

    sections.forEach((sec) => navObserver.observe(sec));
  }

  // --------------------------------------------------------------------------
  // 8. ANIMATION MOTIF 01 — SUBTLE AMBIENT PARALLAX ON SCROLL
  // --------------------------------------------------------------------------
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');
  const orb3 = document.querySelector('.orb-3');

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY;
        // Keep movement extremely subtle so it does not distract or overload GPU
        if (orb1) orb1.style.transform = `translate3d(0, ${scrollPos * 0.04}px, 0)`;
        if (orb2) orb2.style.transform = `translate3d(0, ${-scrollPos * 0.03}px, 0)`;
        if (orb3) orb3.style.transform = `translate3d(0, ${scrollPos * 0.02}px, 0)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 9. CONTACT FORM INTERACTION & ACCESSIBLE CLIENT VALIDATION
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const feedbackBox = document.getElementById('form-feedback');

  if (contactForm && feedbackBox) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const currentLang = document.documentElement.getAttribute('lang') || 'en';
      const dict = i18n[currentLang] || i18n.en;

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const subjectError = document.getElementById('subject-error');
      const messageError = document.getElementById('message-error');

      // Clear previous error messages
      [nameError, emailError, subjectError, messageError].forEach(span => {
        if (span) span.textContent = '';
      });
      [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
        if (inp) inp.classList.remove('invalid');
      });
      feedbackBox.className = 'form-feedback';
      feedbackBox.textContent = '';
      feedbackBox.style.display = 'none';

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = dict.form_error_fill;
        nameInput.classList.add('invalid');
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = dict.form_error_fill;
        emailInput.classList.add('invalid');
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = dict.form_error_email;
        emailInput.classList.add('invalid');
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectError.textContent = dict.form_error_fill;
        subjectInput.classList.add('invalid');
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.textContent = dict.form_error_fill;
        messageInput.classList.add('invalid');
        isValid = false;
      }

      if (!isValid) {
        feedbackBox.classList.add('error');
        feedbackBox.textContent = dict.form_error_fill;
        feedbackBox.style.display = 'block';
        return;
      }

      // Success State
      feedbackBox.classList.add('success');
      feedbackBox.textContent = dict.form_success_msg;
      feedbackBox.style.display = 'block';

      // Reset fields gracefully
      contactForm.reset();

      // Clear success banner after 7 seconds
      setTimeout(() => {
        feedbackBox.style.display = 'none';
      }, 7000);
    });
  }

  // --------------------------------------------------------------------------
  // 10. PROJECT BUTTON PLACEHOLDER CLICKS
  // --------------------------------------------------------------------------
  const projectButtons = document.querySelectorAll('.project-btn');
  projectButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentLang = document.documentElement.getAttribute('lang') || 'en';
      const isAr = currentLang === 'ar';
      // Smooth scroll to contact or show polite info
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});

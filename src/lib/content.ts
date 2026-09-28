export type Locale = "en" | "vi";

export const locales: readonly Locale[] = ["en", "vi"];
export const defaultLocale: Locale = "en";
export const brandName = "OpenAgriX";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export type EvidenceId =
  | "harvest"
  | "soil"
  | "carbon"
  | "biodiversity"
  | "honey"
  | "quality";

export interface Content {
  nav: {
    platform: string;
    evidence: string;
    how: string;
    faq: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    primary: string;
    secondary: string;
    caption: string;
  };
  trust: { eyebrow: string; labels: string[] };
  platform: {
    eyebrow: string;
    title: string;
    description: string;
    features: {
      icon: "shield" | "scan" | "leaf";
      title: string;
      description: string;
    }[];
  };
  evidence: {
    eyebrow: string;
    title: string;
    description: string;
    types: {
      id: EvidenceId;
      title: string;
      description: string;
      detail: string;
    }[];
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  };
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  sponsors: {
    title: string;
  };
  footer: {
    description: string;
    product: string;
    resources: string;
    contact: string;
    explorer: string;
    register: string;
    guides: string;
    source: string;
    devnet: string;
    copyright: string;
  };
  ui: {
    brandTagline: string;
    poweredBy: string;
    connected: string;
    rooted: string;
    skipToContent: string;
    mainNavigation: string;
    footerNavigation: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    language: string;
    vietnamese: string;
    english: string;
    openApp: string;
    externalLink: string;
    exploreEvidence: string;
    previous: string;
    next: string;
    expandQuestion: string;
    collapseQuestion: string;
    backToTop: string;
    farmImageAlt: string;
  };
  demo: {
    eyebrow: string;
    farm: string;
    location: string;
    label: string;
    caption: string;
    status: string;
    recordLabel: string;
    recordId: string;
    harvestLabel: string;
    harvestValue: string;
    dateLabel: string;
    dateValue: string;
    verificationLabel: string;
    verificationValue: string;
    view: string;
  };
}

export const content: Record<Locale, Content> = {
  vi: {
    nav: {
      platform: "Nền tảng",
      evidence: "Bằng chứng",
      how: "Cách hoạt động",
      faq: "Hỏi đáp",
      cta: "Khám phá ứng dụng",
    },
    hero: {
      eyebrow: "TỪ ĐẤT LÀNH, DỰNG NIỀM TIN",
      title: "Mỗi mùa vụ,",
      titleAccent: "một niềm tin.",
      description:
        "Kết nối nông trại với người mua qua bằng chứng minh bạch. Ghi nhận thu hoạch, đất, carbon và nguồn gốc trên Solana — để câu chuyện nông sản được kiểm chứng.",
      primary: "Khám phá bằng chứng",
      secondary: "Tìm hiểu cách hoạt động",
      caption: "Nuôi dưỡng từ đất. Kết nối bằng niềm tin.",
    },
    trust: {
      eyebrow: "MỘT NỀN TẢNG, CHUNG NIỀM TIN",
      labels: [
        "Xây dựng trên Solana",
        "Dành cho nông nghiệp Việt Nam",
        "Bằng chứng có thể tra cứu",
        "Kết nối nông trại & người mua",
      ],
    },
    platform: {
      eyebrow: "VÌ MỘT NỀN NÔNG NGHIỆP MINH BẠCH",
      title: "Chất lượng được vun trồng.\nNiềm tin được ghi nhận.",
      description:
        "Đằng sau mỗi nông sản là cả một hành trình. OpenAgriX giúp nông dân và hợp tác xã lưu lại hành trình ấy, để người mua có thêm cơ sở tìm hiểu nguồn gốc.",
      features: [
        {
          icon: "shield",
          title: "Lưu dấu bằng chứng",
          description:
            "Ghi nhận dấu vết dữ liệu trên Solana, giúp đối chiếu tính toàn vẹn của hồ sơ qua thời gian.",
        },
        {
          icon: "scan",
          title: "Tra cứu công khai",
          description:
            "Người mua khám phá hồ sơ và bằng chứng trên Explorer, với thông tin nguồn gốc dễ tiếp cận hơn.",
        },
        {
          icon: "leaf",
          title: "Kết nối cả hành trình",
          description:
            "Từ dữ liệu đất đến mùa thu hoạch, tập hợp các ghi nhận thành câu chuyện có thể theo dõi của nông trại.",
        },
      ],
    },
    evidence: {
      eyebrow: "BẰNG CHỨNG TỪ THỰC ĐỊA",
      title: "Mỗi dữ liệu nhỏ.\nMột câu chuyện rõ ràng hơn.",
      description:
        "Những điều làm nên chất lượng nông sản xứng đáng được ghi nhận — từ đất dưới chân đến thành quả mỗi mùa.",
      types: [
        {
          id: "harvest",
          title: "Thu hoạch",
          description: "Ghi lại thành quả của mỗi mùa vụ.",
          detail:
            "Lưu thông tin sản lượng, chất lượng và lô thu hoạch để người mua hiểu rõ hơn về nông sản và thời điểm thu hoạch.",
        },
        {
          id: "soil",
          title: "Sức khỏe đất",
          description: "Hiểu mảnh đất nuôi dưỡng cây trồng.",
          detail:
            "Tập hợp chỉ số pH, dinh dưỡng và kết quả kiểm tra đất, tạo nền tảng dữ liệu để theo dõi điều kiện canh tác.",
        },
        {
          id: "carbon",
          title: "Dữ liệu carbon",
          description: "Ghi nhận thêm một góc nhìn về môi trường.",
          detail:
            "Lưu dữ liệu hấp thụ CO₂ và phương pháp tính toán để phục vụ đối chiếu. Một ghi nhận dữ liệu không đồng nghĩa với tín chỉ carbon đã được chứng nhận.",
        },
        {
          id: "biodiversity",
          title: "Đa dạng sinh học",
          description: "Theo dấu hệ sinh thái và nguồn gốc loài.",
          detail:
            "Ghi nhận thông tin loài, hệ sinh thái và hồ sơ liên quan CITES, hỗ trợ theo dõi nguồn gốc, bao gồm trầm hương.",
        },
        {
          id: "honey",
          title: "Chất lượng mật ong",
          description: "Để từng giọt mật có câu chuyện của mình.",
          detail:
            "Lưu kết quả kiểm tra độ ẩm, HMF, diastase và phân hạng, giúp các bên tham khảo thông tin chất lượng của từng lô mật.",
        },
        {
          id: "quality",
          title: "Chất lượng nông sản",
          description: "Làm rõ những chỉ số phía sau chất lượng.",
          detail:
            "Ghi nhận phân hạng, độ Brix, khuyết tật và kết quả kiểm tra dư lượng để bổ sung thông tin cho hồ sơ nông sản.",
        },
      ],
    },
    journey: {
      eyebrow: "HÀNH TRÌNH BẮT ĐẦU TỪ BẠN",
      title: "Từ nông trại đến bằng chứng.\nChỉ từng bước rõ ràng.",
      description:
        "Bắt đầu với hồ sơ nông trại, thêm những ghi nhận thực tế và chia sẻ câu chuyện nông sản của bạn.",
      steps: [
        {
          title: "Tạo hồ sơ nông trại",
          description:
            "Mở ứng dụng, kết nối ví Solana và đăng ký nông trại. Phiên bản hiện tại hoạt động trên mạng thử nghiệm Devnet.",
        },
        {
          title: "Ghi nhận bằng chứng",
          description:
            "Chọn loại bằng chứng phù hợp, bổ sung dữ liệu và tài liệu liên quan, rồi ghi nhận lên Solana.",
        },
        {
          title: "Chia sẻ để đối chiếu",
          description:
            "Giới thiệu hồ sơ trên Explorer để người mua xem lịch sử ghi nhận và tìm hiểu nguồn gốc nông sản.",
        },
      ],
    },
    faq: {
      eyebrow: "HIỂU THÊM VỀ OPENAGRIX",
      title: "Những điều bạn\ncó thể đang muốn biết.",
      description:
        "Bắt đầu từ những câu hỏi thiết thực về bằng chứng, nông trại và công nghệ phía sau.",
      items: [
        {
          question: "Dữ liệu trên blockchain có bảo đảm nông sản đạt chất lượng?",
          answer:
            "Blockchain giúp kiểm tra dấu vết và tính toàn vẹn của dữ liệu đã được ghi nhận. Công nghệ này không tự xác nhận sự thật ngoài thực địa hay độ chính xác của thông tin đầu vào. Chất lượng nông sản vẫn cần được đánh giá bằng kiểm tra, tài liệu và các quy trình phù hợp; hồ sơ OpenAgriX không thay thế chứng nhận chuyên ngành.",
        },
        {
          question: "Tôi có thể bắt đầu sử dụng ngay không?",
          answer:
            "Bạn có thể khám phá ứng dụng và trải nghiệm các tính năng hiện có. OpenAgriX hiện chạy trên Solana Devnet, là mạng thử nghiệm. Để tạo hồ sơ hoặc ghi bằng chứng, ứng dụng yêu cầu kết nối ví tương thích như Phantom được chuyển sang Devnet. Dữ liệu thử nghiệm không nên được xem là hồ sơ sản xuất chính thức.",
        },
        {
          question: "Người mua có cần ví để xem bằng chứng không?",
          answer:
            "Không cần kết nối ví để xem các hồ sơ và bằng chứng công khai trên Explorer. Ví được dùng cho những thao tác ghi dữ liệu như đăng ký nông trại hoặc tạo bằng chứng. Người mua có thể truy cập Explorer để tìm hiểu thông tin hiện có.",
        },
        {
          question: "OpenAgriX phù hợp với những đơn vị nào?",
          answer:
            "Nông dân, trang trại, hợp tác xã và các đơn vị sản xuất muốn xây dựng hồ sơ nguồn gốc có thể tìm hiểu OpenAgriX. Các loại bằng chứng hiện được giới thiệu bao gồm thu hoạch, đất, carbon, đa dạng sinh học, chất lượng mật ong và nông sản. Người mua và đơn vị thu mua có thể tham khảo hồ sơ công khai để hỗ trợ quá trình tìm hiểu nhà cung cấp.",
        },
      ],
    },
    closing: {
      eyebrow: "MỘT HÀNH TRÌNH MINH BẠCH HƠN",
      title: "Vun trồng hôm nay.\nGieo niềm tin ngày mai.",
      description:
        "Để những nỗ lực từ nông trại được nhìn thấy. Cùng OpenAgriX bắt đầu từ bằng chứng đầu tiên.",
      primary: "Đăng ký nông trại",
      secondary: "Khám phá Explorer",
    },
    sponsors: {
      title: "Nhà tài trợ / Cộng đồng",
    },
    footer: {
      description:
        "Kết nối nông trại với người mua qua bằng chứng nông nghiệp minh bạch trên Solana.",
      product: "Nền tảng",
      resources: "Tìm hiểu thêm",
      contact: "Kết nối",
      explorer: "Khám phá bằng chứng",
      register: "Đăng ký nông trại",
      guides: "Hướng dẫn tạo bằng chứng",
      source: "Nội dung tham khảo từ ứng dụng OpenAgriX",
      devnet: "Ứng dụng hiện hoạt động trên Solana Devnet · Mạng thử nghiệm",
      copyright: "© 2026 OpenAgriX. Từ nông trại Việt Nam.",
    },
    ui: {
      brandTagline: "GIEO TRỒNG NIỀM TIN",
      poweredBy: "Xây dựng trên Solana",
      connected: "NÔNG NGHIỆP KẾT NỐI",
      rooted: "KHỞI NGUỒN TỪ BẰNG CHỨNG",
      skipToContent: "Chuyển đến nội dung chính",
      mainNavigation: "Điều hướng chính",
      footerNavigation: "Điều hướng cuối trang",
      openMenu: "Mở trình đơn",
      closeMenu: "Đóng trình đơn",
      switchLanguage: "Switch to English",
      language: "Ngôn ngữ",
      vietnamese: "Tiếng Việt",
      english: "English",
      openApp: "Mở ứng dụng OpenAgriX",
      externalLink: "Mở trang bên ngoài",
      exploreEvidence: "Tìm hiểu loại bằng chứng",
      previous: "Trước",
      next: "Tiếp theo",
      expandQuestion: "Xem câu trả lời",
      collapseQuestion: "Thu gọn câu trả lời",
      backToTop: "Về đầu trang",
      farmImageAlt: "Cánh đồng vàng dưới ánh nắng",
    },
    demo: {
      eyebrow: "MỘT GÓC NHÌN VỀ HỒ SƠ",
      farm: "Nông trại An Lành",
      location: "Việt Nam · Hồ sơ minh họa",
      label: "Dữ liệu minh họa",
      caption: "Ví dụ giao diện, không phải hồ sơ nông trại hoặc giao dịch thực tế.",
      status: "Bản xem trước",
      recordLabel: "Mã bằng chứng",
      recordId: "DEMO · HARVEST · 001",
      harvestLabel: "Loại ghi nhận",
      harvestValue: "Thu hoạch lúa",
      dateLabel: "Mùa vụ",
      dateValue: "Mùa thu hoạch mẫu",
      verificationLabel: "Nền tảng ghi nhận",
      verificationValue: "Solana Devnet",
      view: "Xem hồ sơ trên Explorer",
    },
  },
  en: {
    nav: {
      platform: "Platform",
      evidence: "Evidence",
      how: "How it works",
      faq: "FAQ",
      cta: "Explore the app",
    },
    hero: {
      eyebrow: "ROOTED IN THE EARTH. GROWN WITH TRUST.",
      title: "Every harvest,",
      titleAccent: "a story of trust.",
      description:
        "Connect farms and buyers through transparent evidence. Record harvest, soil, carbon, and provenance data on Solana — and give every agricultural story a traceable foundation.",
      primary: "Explore the evidence",
      secondary: "See how it works",
      caption: "Nurtured by the earth. Connected by trust.",
    },
    trust: {
      eyebrow: "ONE PLATFORM. SHARED TRUST.",
      labels: [
        "Built on Solana",
        "Made for Vietnamese agriculture",
        "Evidence you can explore",
        "Connecting farms & buyers",
      ],
    },
    platform: {
      eyebrow: "FOR A MORE TRANSPARENT FOOD SYSTEM",
      title: "Quality is cultivated.\nTrust is recorded.",
      description:
        "Behind every crop is a journey. OpenAgriX helps farmers and cooperatives document that journey, giving buyers more context to understand where their produce comes from.",
      features: [
        {
          icon: "shield",
          title: "Preserve the evidence",
          description:
            "Record a data trail on Solana to help check the integrity of agricultural records over time.",
        },
        {
          icon: "scan",
          title: "Make records accessible",
          description:
            "Let buyers explore public profiles and evidence through the Explorer, with provenance information easier to find.",
        },
        {
          icon: "leaf",
          title: "Connect the journey",
          description:
            "Bring soil data, harvest records, and more together into a farm story people can follow.",
        },
      ],
    },
    evidence: {
      eyebrow: "EVIDENCE FROM THE FIELD",
      title: "Small pieces of data.\nA clearer picture.",
      description:
        "The things that make agricultural quality deserve to be recorded — from the ground beneath our feet to the rewards of every season.",
      types: [
        {
          id: "harvest",
          title: "Harvest",
          description: "Document the rewards of every season.",
          detail:
            "Record yield, quality, and harvest batch information to help buyers understand the produce and when it was harvested.",
        },
        {
          id: "soil",
          title: "Soil health",
          description: "Understand the earth that nourishes each crop.",
          detail:
            "Bring together pH, nutrients, and soil test results to build a record of growing conditions.",
        },
        {
          id: "carbon",
          title: "Carbon data",
          description: "Add another perspective on the environment.",
          detail:
            "Store CO₂ absorption data and calculation methods for review. A data record does not, by itself, represent a certified carbon credit.",
        },
        {
          id: "biodiversity",
          title: "Biodiversity",
          description: "Trace ecosystems and species provenance.",
          detail:
            "Document species, ecosystems, and CITES-related records to support provenance tracking, including for agarwood.",
        },
        {
          id: "honey",
          title: "Honey quality",
          description: "Give every drop a story of its own.",
          detail:
            "Record moisture, HMF, diastase, and grading results so people can review the quality information available for a honey batch.",
        },
        {
          id: "quality",
          title: "Produce quality",
          description: "Make the details behind quality visible.",
          detail:
            "Record grading, Brix, defects, and residue test results to add useful context to produce profiles.",
        },
      ],
    },
    journey: {
      eyebrow: "THE JOURNEY STARTS WITH YOU",
      title: "From farm to evidence.\nOne clear step at a time.",
      description:
        "Start with a farm profile, add records from the field, and share the story behind your produce.",
      steps: [
        {
          title: "Create your farm profile",
          description:
            "Open the app, connect a Solana wallet, and register your farm. The current version runs on the Devnet test network.",
        },
        {
          title: "Record your evidence",
          description:
            "Choose the relevant evidence type, add data and supporting documents, then record it on Solana.",
        },
        {
          title: "Share it for review",
          description:
            "Share your Explorer profile so buyers can follow the record history and learn about your produce's origins.",
        },
      ],
    },
    faq: {
      eyebrow: "GET TO KNOW OPENAGRIX",
      title: "A few things\nyou might be wondering.",
      description:
        "Practical answers about agricultural evidence, farm records, and the technology behind them.",
      items: [
        {
          question: "Does a blockchain record guarantee produce quality?",
          answer:
            "Blockchain helps people check the trail and integrity of recorded data. It does not independently verify physical conditions or the accuracy of the original inputs. Produce quality still needs to be assessed through appropriate inspections, documents, and processes; an OpenAgriX record does not replace specialist certification.",
        },
        {
          question: "Can I start using OpenAgriX today?",
          answer:
            "You can explore the app and try its available features. OpenAgriX currently runs on Solana Devnet, a test network. Creating a farm profile or recording evidence requires a compatible wallet, such as Phantom, switched to Devnet. Test data should not be treated as official production records.",
        },
        {
          question: "Do buyers need a wallet to view evidence?",
          answer:
            "No wallet connection is needed to view public profiles and evidence in the Explorer. A wallet is used for actions that write data, such as registering a farm or creating evidence. Buyers can visit the Explorer to review the information available.",
        },
        {
          question: "Who is OpenAgriX for?",
          answer:
            "Farmers, farms, cooperatives, and producers interested in documenting provenance can explore OpenAgriX. The evidence types currently presented cover harvests, soil, carbon, biodiversity, honey quality, and produce quality. Buyers and sourcing teams can review public profiles as part of learning about a supplier.",
        },
      ],
    },
    closing: {
      eyebrow: "A MORE TRANSPARENT JOURNEY",
      title: "Cultivate today.\nGrow trust for tomorrow.",
      description:
        "Make the care behind every harvest visible. Start with your first piece of evidence on OpenAgriX.",
      primary: "Register your farm",
      secondary: "Visit the Explorer",
    },
    sponsors: {
      title: "Sponsors / Communities",
    },
    footer: {
      description:
        "Connecting farms and buyers through transparent agricultural evidence on Solana.",
      product: "Platform",
      resources: "Learn more",
      contact: "Connect",
      explorer: "Explore the evidence",
      register: "Register your farm",
      guides: "Evidence guide",
      source: "Content informed by the OpenAgriX app",
      devnet: "The app currently runs on Solana Devnet · Test network",
      copyright: "© 2026 OpenAgriX. Rooted in Vietnamese agriculture.",
    },
    ui: {
      brandTagline: "GROW WITH TRUST",
      poweredBy: "Powered by Solana",
      connected: "AGRICULTURE, CONNECTED.",
      rooted: "ROOTED IN EVIDENCE",
      skipToContent: "Skip to main content",
      mainNavigation: "Main navigation",
      footerNavigation: "Footer navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Chuyển sang tiếng Việt",
      language: "Language",
      vietnamese: "Tiếng Việt",
      english: "English",
      openApp: "Open the OpenAgriX app",
      externalLink: "Open external page",
      exploreEvidence: "Learn about this evidence type",
      previous: "Previous",
      next: "Next",
      expandQuestion: "Show answer",
      collapseQuestion: "Hide answer",
      backToTop: "Back to top",
      farmImageAlt: "Golden fields in warm sunlight",
    },
    demo: {
      eyebrow: "A GLIMPSE OF A FARM RECORD",
      farm: "An Lành Farm",
      location: "Vietnam · Illustrative profile",
      label: "Sample data",
      caption: "Interface illustration only, not a real farm record or transaction.",
      status: "Preview",
      recordLabel: "Evidence reference",
      recordId: "DEMO · HARVEST · 001",
      harvestLabel: "Record type",
      harvestValue: "Rice harvest",
      dateLabel: "Season",
      dateValue: "Sample harvest season",
      verificationLabel: "Record platform",
      verificationValue: "Solana Devnet",
      view: "View records in the Explorer",
    },
  },
};

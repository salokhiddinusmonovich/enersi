// Language-independent company facts. Every value here is taken from the
// company's own documents (tax/state registration, certificates) — keep it
// that way: anything shown as a fact on the site should be traceable to them.

export const COMPANY = {
    name: "ENERSI",
    legalName: '"ENERSI" MAS`ULIYATI CHEKLANGAN JAMIYAT',
    shortLegalName: "MCHJ ENERSI",
    since: 2004,
    inn: "306 079 901",
    registeredAt: "04.02.2019",
    registryNo: "679324",
    director: "Xushiyev Akbar Meyliyevich",
    bank: {
        account: "2020 8000 0010 0431 2001",
        mfo: "00420",
        name: 'TOSHKENT SH., "IPOTEKA-BANK" ATIB MIROBOD FILIALI',
    },
    contacts: {
        telegramUser: "enersi_uz",
        telegramUrl: "https://t.me/enersi_uz",
        // Fill in when available — the site hides empty contacts automatically.
        phone: "" as string,
        email: "" as string,
    },
    mapUrl: "https://yandex.uz/maps/?text=" + encodeURIComponent("Toshkent viloyati, Toshkent tumani, Yuqori Ko'kterak ko'chasi 25"),
} as const;

/** Product conformity certificate (НКУ) — "Asviz" certification body, O'ZAK.MS.0077 */
export const NKU_CERT = {
    number: "UZ.SMT-01-0077-29938",
    issued: "14.05.2025",
    validUntil: "14.05.2027",
    standard: "ГОСТ Р 51321.1-2007",
    hsCode: "8537 10 980 0",
} as const;

export type DocId = "nku" | "state" | "tax" | "xushiyev" | "eshqulov";

export interface CompanyDoc {
    id: DocId;
    pdf: string;
    pages: string[];
    /** landscape certificates vs portrait A4 forms — drives the thumbnail ratio */
    landscape?: boolean;
}

export const DOCS: CompanyDoc[] = [
    { id: "nku", pdf: "/docs/enersi-sertifikat-nku.pdf", pages: ["/docs/preview/sertifikat-nku.jpg", "/docs/preview/sertifikat-nku-2.jpg"] },
    { id: "state", pdf: "/docs/enersi-davlat-guvohnoma.pdf", pages: ["/docs/preview/davlat-guvohnoma.jpg"] },
    { id: "tax", pdf: "/docs/enersi-soliq-guvohnoma.pdf", pages: ["/docs/preview/soliq-guvohnoma.jpg"] },
    { id: "xushiyev", pdf: "/docs/sertifikat-xushiyev-akbar.pdf", pages: ["/docs/preview/xushiyev.jpg"], landscape: true },
    { id: "eshqulov", pdf: "/docs/sertifikat-eshqulov-shohabbos.pdf", pages: ["/docs/preview/eshqulov.jpg"], landscape: true },
];

export type ProductId = "ukrm" | "vru" | "sho" | "shao";
export const PRODUCT_IDS: ProductId[] = ["vru", "sho", "shao", "ukrm"];

export type ServiceId = "nku" | "install" | "solar" | "audit" | "compensation" | "service";
export const SERVICE_IDS: ServiceId[] = ["nku", "install", "solar", "audit", "compensation", "service"];

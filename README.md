# ENERSI — сайт компании

Vite + React 18 + TypeScript + Tailwind + react-router (архитектура как у YashilQo'llar).

```
src/
  data/company.ts       факты о компании: реквизиты, контакты, сертификат, список документов
  i18n/{uz,ru,en}.ts    все тексты сайта (uz — основной, ru/en типизированы по нему)
  contexts/             LanguageContext (uz/ru/en, выбор запоминается)
  components/ui/        Icon, CabinetIllustration (SVG щитов), DocumentViewer, карточки
  components/effects/   FadeIn, PageTransition, TopProgressBar…
  sections/             Navbar, Footer, CtaBanner, NotFoundPage
  pages/                Home, Services, Products, Certificates, About, Contact
public/
  brand/                логотипы (цветной и белый, прозрачный фон)
  docs/                 PDF документов + docs/preview/*.jpg для просмотра
```

Телефон и e-mail заполняются в `src/data/company.ts` → `contacts`; на сайте они появятся автоматически.

```bash
npm install
npm run dev
```
# enersi

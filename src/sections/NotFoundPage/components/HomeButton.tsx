import { MagneticLink } from "@/components/effects/Magnetic";
import { useLang } from "@/contexts/LanguageContext";
import { Icon } from "@/components/ui/Icon";

export const HomeButton = () => {
  const { t } = useLang();
  return (
    <MagneticLink to="/" strength={0.1} className="btn-primary">
      <Icon name="arrow" className="h-4 w-4 rotate-180" strokeWidth={2.4} />
      {t.notFound.back}
    </MagneticLink>
  );
};

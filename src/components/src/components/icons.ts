import {
  BookOpen,
  BriefcaseBusiness,
  ClipboardCheck,
  FileText,
  Landmark,
  Scale,
  Search,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from 'lucide-react';

/** 콘텐츠 파일에서 문자열로 지정한 아이콘 이름을 실제 컴포넌트로 연결합니다. */
export const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  BriefcaseBusiness,
  ClipboardCheck,
  FileText,
  Landmark,
  Scale,
  Search,
  ShieldCheck,
  UserRound,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? FileText;
}

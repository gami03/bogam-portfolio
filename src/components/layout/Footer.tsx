import { Mail } from "lucide-react";
import { siteMeta } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-zinc-900 py-12">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h3 className="text-2xl font-semibold text-zinc-100">
          함께 일할 기회를 기다립니다.
        </h3>
        <p className="max-w-md text-sm text-zinc-400">
          새로운 팀에서 임팩트를 만들 준비가 되어 있습니다. 편하게 연락 주세요.
        </p>

        <a
          href={`mailto:${siteMeta.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
        >
          <Mail size={16} />
          {siteMeta.email}
        </a>

        <div className="flex items-center gap-5 text-zinc-500">
          <a
            href={siteMeta.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="transition-colors hover:text-zinc-200"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          {siteMeta.linkedin && (
            <a
              href={siteMeta.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="transition-colors hover:text-zinc-200"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          )}
        </div>

        <p className="text-xs text-zinc-600">
          © {year} {siteMeta.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

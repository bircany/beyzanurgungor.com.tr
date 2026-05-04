import { useEffect } from "react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMentoraUrl } from "@/lib/mentora";

const MentoraBridge = () => {
  const mentoraUrl = getMentoraUrl();

  useEffect(() => {
    window.location.replace(mentoraUrl);
  }, [mentoraUrl]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
      <div className="w-full max-w-xl rounded-3xl border border-border/60 bg-background/90 p-8 text-center shadow-xl backdrop-blur">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <BriefcaseBusiness className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold text-primary-dark">Mentora'ya yönlendiriliyorsunuz</h1>
        <p className="mt-3 text-muted-foreground">
          Bu kapı seni ayrı çalışan Mentora projesine götürür. Otomatik geçiş olmazsa aşağıdaki butonu kullan.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={mentoraUrl} className="w-full sm:w-auto">
            <Button className="btn-cta w-full sm:w-auto">
              <ArrowRight className="mr-2 h-4 w-4" />
              Mentora'ya Git
            </Button>
          </a>
        </div>
        <p className="mt-6 break-all text-sm text-muted-foreground">{mentoraUrl}</p>
      </div>
    </main>
  );
};

export default MentoraBridge;

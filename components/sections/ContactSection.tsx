"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { toast } from "sonner";
import Container from "../layout/Container";

export default function ContactSection() {
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      toast.success("Email copiata negli appunti!", {
        description: personalInfo.email,
      });
    } catch (_err) {
      toast.error("Impossibile copiare l&apos;email", {
        description: "Riprova di nuovo",
      });
    }
  };
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-12"
        >
          {/* Title */}
          <div className="space-y-4">
            <h2 className="heading-lg">Pronto a Iniziare il Tuo Progetto?</h2>
            <p className="body-lg">
              Prenota una consulenza gratuita di 30 minuti per discutere delle tue esigenze. Nessun impegno richiesto. Esploriamo insieme come l&apos;AI può trasformare il tuo business.
            </p>
          </div>

          {/* CTA Button - Primary */}
          <div className="space-y-6">
            <ButtonLink
              size="lg"
              href="https://cal.com/euxhenjonex/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-6 text-sm font-semibold uppercase tracking-wider gap-2"
            >
              <Calendar className="w-5 h-5" />
              Prenota una call gratuita
            </ButtonLink>

            {/* Divider */}
            <div className="flex items-center gap-4 max-w-xs mx-auto">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">oppure contattami direttamente</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Contact Options - WhatsApp & Email */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* WhatsApp Button */}
                <ButtonLink
                  variant="outline"
                  size="lg"
                  href="https://wa.me/393758188477?text=Ciao%20Eugenio%2C%20vorrei%20informazioni%20sui%20tuoi%20servizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full gap-2 text-base min-w-[200px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </ButtonLink>

                {/* Email Button */}
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleEmailClick}
                  className="rounded-full gap-2 text-base min-w-[200px]"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

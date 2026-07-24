/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationDownloads
 * Version: 2.0.0
 *
 * Purpose:
 * Displays downloadable publication
 * resources including PDFs, datasets,
 * supplementary files, and citation files.
 *
 * Used In:
 * • Publications Page
 * • Publication Details
 * • Digital Repository
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

type DownloadItem = {
  title: string;

  type: string;

  size?: string;

  href: string;
};

type PublicationDownloadsProps = {
  title?: string;

  description?: string;

  files: DownloadItem[];

  className?: string;
};

export default function PublicationDownloads({
  title = "Downloads",
  description,
  files,
  className = "",
}: PublicationDownloadsProps) {
  return (
    <Card className={className}>
      <div className="flex items-center gap-3">
        <Download className="h-6 w-6 text-emerald-700" />

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>
      </div>

      {description && (
        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>
      )}

      <div className="mt-8 space-y-5">
        {files.map((file, index) => (
          <div
            key={`${file.title}-${index}`}
            className="
              flex
              flex-col
              gap-5
              rounded-xl
              border
              border-slate-200
              p-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div className="flex items-center gap-4">
              <FileText className="h-8 w-8 text-emerald-700" />

              <div>
                <h4 className="font-semibold text-slate-900">
                  {file.title}
                </h4>

                <p className="text-sm text-slate-500">
                  {file.type}
                  {file.size && ` • ${file.size}`}
                </p>
              </div>
            </div>

            <Button
              href={file.href}
              variant="secondary"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
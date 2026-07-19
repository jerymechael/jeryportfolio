export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6 py-10">
        {/* Teks diletakkan di sebelah kiri secara default */}
        <p className="text-sm text-muted-2 w-full text-left sm:w-auto">
          © 2026 ResumeQ · All rights reserved
        </p>
      </div>
    </footer>
  );
}
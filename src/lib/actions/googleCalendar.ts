export function addToCalendar() {
    const title = "Pernikahan Darma & Rini (Kancil & Noning)";
    const location = "Banjar Adat Sengguan, Klungkung, Bali";
    const details = "Mohon doa restu dalam acara resepsi pernikahan kami.";
    
    // Format: YYYYMMDDTHHMMSS (Tanpa 'Z' agar mengikuti zona waktu lokal HP user)
    const startDate = "20260102T140000"; 
    const endDate = "20260102T220000"; // Estimasi selesai jam 10 malam

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(url, '_blank');
}
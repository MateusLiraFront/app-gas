import './Footer.css'


export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-center items-center gap-8 py-4 px-8">
        <button className="flex flex-col items-center text-xs">
          <i className="fa-solid fa-house text-xl"></i>
          Home
        </button>

        <button className="flex flex-col items-center text-xs">
<i class="fa-solid fa-chart-column"></i>
          Dashboard
        </button>

        <button className="flex flex-col items-center text-xs">
          <i className="fa-solid fa-gear text-xl"></i>
          Config
        </button>
        
      </div>
    </footer>
  );
}


import { Link } from 'react-router-dom';

function Header({ theme, toggleTheme }) {

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#f5f5f5]/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* 로고 */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={`${import.meta.env.BASE_URL}logo/nw-logo.png`}
                alt="로고"
                className="w-8 h-8 object-contain rounded-lg invert dark:invert-0"
              />
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                보혈선포문 · 기도문
              </h1>
            </Link>

            {/* 메뉴 버튼 숨김 */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

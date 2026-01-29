function Footer() {
  return (
    <footer>
      {/* 저작권 - 하단 고정 */}
      <div className="fixed bottom-0 left-0 right-0 py-4 bg-[#f5f5f5] dark:bg-[#1a1a1a] border-t border-gray-400 dark:border-[#333333] z-20 flex items-center justify-center">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 m-0 leading-none">
          © 2026 뉴웨이교회
        </p>
      </div>
    </footer>
  )
}

export default Footer


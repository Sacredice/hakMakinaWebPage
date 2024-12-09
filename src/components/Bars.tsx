
interface PropType {
  barHeights: string[];
}

function Bars({ barHeights }: PropType) {
  return (
    <div className={`hidden lg:flex items-center no-hover:hidden justify-end mr-[1.6%] 2xl:mr-[2.4%] z-10 h-full w-7/12`}>
      {barHeights.map((bar, i) => {
        return <div key={i} className={`lg:mx-1 xl:mx-1.5 ${bar} opacity-100 2xl:w-40 w-32 transition-[height] ease-in-out duration-[700ms] shadow-barShadow rounded-full`} style={{ backdropFilter: `brightness(${2.1 - i / 6})` }}>{bar}</div>
      })}
    </div>
  )
}

export default Bars

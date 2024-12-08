
interface PropType {
  barHeights: string[];
}

function Bars({ barHeights }: PropType) {
  return (
    <div className={`hidden lg:flex items-center justify-end mr-[1.6%] z-10 h-full w-7/12`}>
      {barHeights.map((bar, i) => {
        return <div key={i} className={`lg:mx-2 xl:mx-3 ${bar} opacity-100 w-32 transition-[height] ease-in-out duration-[700ms] shadow-barShadow rounded-full`} style={{ backdropFilter: `brightness(${2.1 - i / 6})` }}>{bar}</div>
      })}
    </div>
  )
}

export default Bars

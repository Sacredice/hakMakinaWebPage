
interface PropType {
  barHeights: string[];
}

function Bars({ barHeights }: PropType) {
  return (
    <div className="flex">
      {barHeights.map((bar, i) => {
        return <div key={i} className={`bg-green-500 ${bar} w-32`}>{bar}</div>
      })}
    </div>
  )
}

export default Bars

import Image from "next/image"
interface EmptyProps {
  label: string
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <p className="text-muted-foreground font-extrabold text-md text-center">{label}</p>
      <div className="relative h-96 w-96">
        <Image fill alt="empty gif" src="https://cdn.dribbble.com/users/665029/screenshots/16162764/media/3ea69cb1655fba401acc6c4328d38633.gif" />
      </div>
    </div>
  )
}

export default Empty

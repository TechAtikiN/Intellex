interface HeadingProps {
  title: string
  description: string
  icon: any
  iconColor: string
  bgColor: string
}

const Heading = ({ title, description, icon, iconColor, bgColor }: HeadingProps) => {
  return (
    <div className="flex space-x-3 items-center px-4 lg:px-8 mb-8">
      <div className={`p-2 rounded-full ${iconColor} ${bgColor} h-10 w-10`}>{icon}</div>
      <div>
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default Heading

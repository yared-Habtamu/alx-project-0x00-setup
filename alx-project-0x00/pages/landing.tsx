import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card />
      
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Button Variations</h2>
        <div className="flex flex-wrap gap-4">
          <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button title="Large Rounded-full" size="large" shape="rounded-full" />
          <Button 
            title="Custom Button" 
            size="medium" 
            className="bg-red-500 hover:bg-red-600"
          />
        </div>
      </div>
    </div>
  )
}
export default Landing
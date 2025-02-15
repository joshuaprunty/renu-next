import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Secondary() {
  const cardData = [
    {
      title: "Tell us about your current class search",
      text: "Fill out info like what distro and major requirements you want to satisfy, classes already taken, and how many hours a week you want to spend on the class.",
    },
    {
      title: "Get class recommendations selected by our algorithm",
      text: "Renu uses Northwestern course data APIs to get up to date info on class offerings, and considers a range of factors to find the ones that will best fit your search.",
    },
    {
      title: "Like or dislike recommendations to improve future searches",
      text: "Machine Learning allows Renu to constantly improve its recommendations based on student input.",
    },
  ];

  return (
    <>
      <div className="bg-background flex justify-center items-center py-24 mx-auto px-4 max-w-[100rem]" id="secondary-div">
        <div className="mx-auto px-4 max-w-[100rem]">
          <p className="text-5xl text-center font-medium">How Renu Works</p>
          <hr className="w-5/6 mx-auto my-5 text-foreground" />
          <div className="flex flex-wrap justify-center text-center px-2">
            {cardData.map((data, index) => (
              <div key={index} className="w-11/12 md:w-[30%] my-3 md:my-2 mx-5">
                <Card className="h-full py-12 px-8">
                  <CardHeader>
                    <CardTitle className="text-3xl h-36 font-normal">
                      {data.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-light">
                      {data.text}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-border w-full"></div>
    </>
  );
}


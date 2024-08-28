import MainText from "./MainText";

const OpeningText = () => {
    return(
        <div className="bg-background bg-opacity-50 text-white pb-40">
            <MainText direction="ltr" />
      <MainText direction="rtl" />
      <MainText direction="ltr" />
        </div>
    )
}

export default OpeningText;
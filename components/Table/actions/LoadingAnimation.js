import Lottie from "lottie-react";
import loadingLottie from "@/public/lottie/loading-lottie.json";
import checkLottie from "@/public/lottie/check-lottie.json";
import errorLottie from "@/public/lottie/error-lottie.json";

function LoadingAnimation({ isPending, isSuccess, isError, handleOnComplete }) {
  const loadingOptions = {
    loop: true,
    autoPlay: true,
    animationData: loadingLottie,
  };

  const checkOptions = {
    loop: false,
    autoPlay: true,
    animationData: checkLottie,
  };

  const errorOptions = {
    loop: false,
    autoPlay: true,
    animationData: errorLottie,
  };

  return (
    <>
      {isPending && (
        <div className="size-[180px]">
          <Lottie {...loadingOptions} />
        </div>
      )}

      {isSuccess && (
        <div className="size-[180px]">
          <Lottie {...checkOptions} onComplete={handleOnComplete} />
        </div>
      )}
      {isError && (
        <div className="size-[180px]">
          <Lottie {...errorOptions} onComplete={handleOnComplete} />
        </div>
      )}
    </>
  );
}

export default LoadingAnimation;

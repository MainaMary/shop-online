"use client";

import { useRouter } from "next/navigation";
import { Button } from "./components";

interface ErrorPageProps {
  label: string;
  title: string;
  description: string;
  image?: string;
  navigateTo?: string;
  buttonText?: string;
  error: Error & { digest?: string };
  reset: () => void;
}

const CustomErrorPage: React.FC<ErrorPageProps> = ({
  error,
  reset,
  label = 404,
  title = "You have found a secret place",
  image = "/assets/404 Error-rafiki.svg",
  description = " Looks like you've found the\
                                doorway to the great nothing.\n Sorry about that! Please visit our hompage to get where you need to go",
  navigateTo = "-1",
  buttonText = "Go Back",
}) => {
  const router = useRouter();

  return (
    <div className="m-auto flex h-screen items-center justify-center">
      <div>
        <div
          style={{ textAlign: "center", ...errorStyles.label }}
          className="text-brand-300 text-opacity-50"
        >
          {label}
        </div>
        {/* <div className="mx-auto flex items-center justify-center">
          <Image
            width={400}
            height={400}
            src={"/images/oops.svg"}
            alt="not found illustration"
          />
        </div> */}

        <p className="text-center" style={{ ...errorStyles.title }}>
          {title}
        </p>

        <p
          className="text-center text-lg"
          style={{ ...errorStyles.description }}
        >
          {description}
        </p>
        <ErrorPageButtons
          navigateTo={navigateTo}
          buttonText={buttonText}
          reset={reset}
        />
      </div>
    </div>
  );
};

type ErrorButtonsProps = {
  navigateTo: string;
  buttonText: string;
  reset: () => void;
};

export const ErrorPageButtons = ({
  navigateTo,
  buttonText,
  reset,
}: ErrorButtonsProps) => {
  const router = useRouter();
  return (
    <div className="align-center flex justify-center gap-4 pt-10">
      <Button
        onClick={
          // () => reset()
          () => router.back()
        }
      >
        {buttonText ?? "Try again"}
      </Button>

      <Button onClick={() => router.push("/")}>Take me to the home page</Button>
    </div>
  );
};

export default CustomErrorPage;

export const errorStyles = {
  label: {
    fontWeight: 900,
    fontSize: "220px",
    lineHeight: 1,
    marginBottom: "10",
    color: "bg-brand-300",
    // color:
    //   theme.colorScheme === "dark"
    //     ? theme.colors.dark[4]
    //     : theme.colors.gray[2],

    // [theme.fn.smallerThan("sm")]: {
    //   fontSize: 120
    // }
  },

  title: {
    fontWeight: 900,
    fontSize: 38,

    // [theme.fn.smallerThan("sm")]: {
    //   fontSize: 32
    // }
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    // marginTop: theme.spacing.xl,
    // marginBottom: theme.spacing.xl * 1.5
  },
};

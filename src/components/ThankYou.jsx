import classes from "./ThankYou.module.css";
import thankYou from "../assets/images/icon-thank-you.svg";
const ThankYou = () => {
  return (
    <section className={classes.container}>
      <div>
        <img src={thankYou} alt="thank you" />
        <h1>Thank You!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </section>
  );
};

export default ThankYou;

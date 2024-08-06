function sendEmail() {
  emailjs
    .send(
      "ID",
      "TEMPid",
      {
        message: "Odwiedziłeś stronę https://chatgpt.com/",
      },
      "user"
    )
    .then(
      (response) => {
        console.log("E-mail został wysłany!", response.status, response.text);
      },
      (error) => {
        console.error("Błąd przy wysyłaniu e-maila.", error);
      }
    );
}

(function () {
  function sendEmail() {
    emailjs
      .send(
        "service_l8e6t4s",
        "template_ds41yhm",
        {
          message: "Odwiedziłeś stronę https://chatgpt.com/",
        },
        "your_user_id" // no i tutaj juz nie mam pojecia co wkleic, bo nic nie dzila
      )
      .then(
        (response) => {
          console.log("E-mail został wysłany!", response.status, response.text);
        },
        (error) => {
          console.error("Błąd przy wysyłaniu e-maila.", error);
        }
      );
  }

  sendEmail();
})();

//API

jXLjsSilbjMYsT6mL;

IpE121324;

package main

import (
	"fmt"
	"net/http"
	"time"
	"os/exec"
	"log"
)


func enableInternet(){
	out, err := exec.Command("./enable.sh").Output()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Output is %s\n", out)
	fmt.Println("Internet is enabled")
}

func disableInternet(){
	out, err := exec.Command("./disable.sh").Output()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Output is %s\n", out)
	fmt.Println("Internet is disabled")

}


func acceptHandler(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, `
<html>
<head>
	<title>Pure OK Page</title>
</head>
<body>
	<h1> You have 30 seconds of using internet</h1>
</body>
</html>
`)

	go func(){
		enableInternet()
		timer1 := time.NewTimer(time.Second * 30)
		<- timer1.C
		disableInternet()
	}()	
}


func hanlder(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w,`
<html>
<head>
	<title>Pure Accept Page</title>
</head>
<body>
	<a href='/accept'>GO to internet for 30 seconds</a>
</body>
</html>
`)
}

func main(){
	disableInternet()
	http.HandleFunc("/accept", acceptHandler)
	http.HandleFunc("/", hanlder)
	http.ListenAndServe(":8081", nil)
	log.Println("Done")
}

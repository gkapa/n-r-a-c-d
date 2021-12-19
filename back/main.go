package main

import "fmt"

func main() {
	fmt.Println("started")
}

// package main

// import (
// 	"fmt"
// 	"html"
// 	"log"
// 	"net/http"
// )

// func main() {
// 	fmt.Println("Hello, Dockerfile")

// 	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
// 		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
// 	})

// 	http.HandleFunc("/hi", func(w http.ResponseWriter, r *http.Request) {
// 		fmt.Fprintf(w, "Hi")
// 	})

// 	log.Fatal(http.ListenAndServe(":8081", nil))
// }

const int led_in = 10;
const int small_led = 2;
int led_read;

void setup() {
  // put your setup code here, to run once:
  pinMode(small_led,OUTPUT);
  pinMode(led_in,INPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  led_read = digitalRead(led_in);
  Serial.println(led_read);
}

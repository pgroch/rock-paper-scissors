def on_forever():
    if pins.digital_read_pin(DigitalPin.P2) == 1:
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(5000)
    else:
        pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)

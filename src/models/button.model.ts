export class ButtonConfiguration {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    borderSize?: string;
  
    constructor(
      backgroundColor?: string,
      color?: string,
      borderColor?: string,
      borderSize?: string
    ) {
      this.backgroundColor = backgroundColor;
      this.color = color;
      this.borderColor = borderColor;
      this.borderSize = borderSize;
    }
  }
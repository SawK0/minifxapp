import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-newline-to-comma',
  imports: [],
  templateUrl: './newline-to-comma.html',
  styleUrl: './newline-to-comma.scss',
})
export class NewlineToComma {
  inputText = signal('');
  outputText = signal('');
  separator = signal(', ');
  removeEmpty = signal(true);
  trimLines = signal(true);
  wrapWith = signal('none');
  quoteWith = signal('none');

  convert() {
    const input = this.inputText();
    if (!input) {
      this.outputText.set('');
      return;
    }

    let lines = input.split('\n');

    if (this.trimLines()) {
      lines = lines.map(line => line.trim());
    }

    if (this.removeEmpty()) {
      lines = lines.filter(line => line.length > 0);
    }

    // Apply quotes to each item
    const quoteType = this.quoteWith();
    if (quoteType !== 'none') {
      const quote = quoteType === 'single' ? "'" : '"';
      lines = lines.map(line => `${quote}${line}${quote}`);
    }

    let result = lines.join(this.separator());

    // Apply wrapper brackets
    const wrapper = this.wrapWith();
    switch (wrapper) {
      case 'square':
        result = `[${result}]`;
        break;
      case 'round':
        result = `(${result})`;
        break;
      case 'curly':
        result = `{${result}}`;
        break;
    }

    this.outputText.set(result);
  }

  clear() {
    this.inputText.set('');
    this.outputText.set('');
  }

  copyToClipboard() {
    const output = this.outputText();
    if (output) {
      navigator.clipboard.writeText(output);
    }
  }

  onInputChange(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    this.inputText.set(textarea.value);
    this.convert();
  }

  onSeparatorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.separator.set(input.value);
    this.convert();
  }

  onRemoveEmptyChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.removeEmpty.set(checkbox.checked);
    this.convert();
  }

  onTrimLinesChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.trimLines.set(checkbox.checked);
    this.convert();
  }

  onWrapWithChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.wrapWith.set(select.value);
    this.convert();
  }

  onQuoteWithChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.quoteWith.set(select.value);
    this.convert();
  }
}

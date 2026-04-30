---
title: Data Representation
description: "DSE ICT notes on data representation covering binary, hexadecimal, character encoding, image and audio representation, compression, and error detection."
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - ICT
categories:
  - DSE
  - ICT
slug: data-representation
---

This document extends the foundational data representation topics in
[computer-systems.md](computer-systems.md) with deeper technical treatment of number systems,
character encoding mechanisms, compression algorithms, file format specifications, and error
detection/correction techniques.

---

## Number Systems -- Extended Coverage

The binary, hexadecimal, and BCD systems are covered in [computer-systems.md](computer-systems.md).
This section introduces the octal system and binary arithmetic.

### Octal (Base 8)

Octal uses digits 0--7. Each octal digit represents exactly 3 bits, making conversion between octal
and binary trivial.

| Octal | Binary | Decimal |
| ----- | ------ | ------- |
| 0     | 000    | 0       |
| 1     | 001    | 1       |
| 2     | 010    | 2       |
| 7     | 111    | 7       |
| 10    | 001000 | 8       |
| 17    | 001111 | 15      |
| 20    | 010000 | 16      |

**Binary to octal:** Group bits in groups of 3 from the right, convert each group.

**Octal to binary:** Replace each octal digit with its 3-bit binary equivalent.

**Decimal to octal:** Repeatedly divide by 8, record remainders from bottom to top.

<details>
<summary>Worked Example: Decimal 250 to Octal, and Octal 372 to Decimal</summary>

**250 to octal:**

$250 \div 8 = 31$ R $2$

$31 \div 8 = 3$ R $7$

$3 \div 8 = 0$ R $3$

Reading remainders from bottom to top: $250_{10} = 372_8$

**372 to decimal:**

$3 \times 8^2 + 7 \times 8^1 + 2 \times 8^0 = 3 \times 64 + 7 \times 8 + 2 \times 1 = 192 + 56 + 2 = 250_{10}$

**372 to binary:** Replace each octal digit with 3 bits: $011\ 111\ 010 = 11111010_2$

</details>

### Binary Arithmetic

#### Binary Addition

Binary addition follows the same principles as decimal addition, with carries propagating when the
sum of a column exceeds 1.

| Operation | Result | Carry |
| --------- | ------ | ----- |
| 0 + 0     | 0      | 0     |
| 0 + 1     | 1      | 0     |
| 1 + 0     | 1      | 0     |
| 1 + 1     | 0      | 1     |
| 1 + 1 + 1 | 1      | 1     |

<details>
<summary>Worked Example: Add 0110 1011 and 0101 1101</summary>

```
  0110 1011
+ 0101 1101
  ---------
  1100 1000
```

Working right to left:

Column 0: 1 + 1 = 0, carry 1

Column 1: 1 + 0 + 1 (carry) = 0, carry 1

Column 2: 0 + 1 + 1 (carry) = 0, carry 1

Column 3: 1 + 1 + 1 (carry) = 1, carry 1

Column 4: 0 + 0 + 1 (carry) = 1, carry 0

Column 5: 1 + 1 + 0 = 0, carry 1

Column 6: 1 + 0 + 1 (carry) = 0, carry 1

Column 7: 0 + 0 + 1 (carry) = 1, carry 0

Result: $1100\ 1000_2$

Verification: $107 + 93 = 200$, and $11001000_2 = 128 + 64 + 8 = 200$. Correct.

</details>

#### Two's Complement

Two's complement is the standard method for representing signed integers in binary. The most
significant bit (MSB) serves as the sign bit: 0 for positive, 1 for negative.

**Range for n bits:** $-2^{n-1}$ to $2^{n-1} - 1$

For 8 bits: $-128$ to $+127$.

**Finding the two's complement of a number:**

1. Invert all bits (one's complement).
2. Add 1 to the result.

<details>
<summary>Worked Example: Represent -42 in 8-bit Two's Complement</summary>

Step 1: Write $+42$ in 8-bit binary.

$42 = 32 + 8 + 2 = 00101010$

Step 2: Invert all bits (one's complement).

$11010101$

Step 3: Add 1.

$11010101 + 1 = 11010110$

So $-42$ in 8-bit two's complement is $11010110$.

Verification: The MSB is 1 (negative). Magnitude: invert $11010110 \to 00101001$, add
$1 \to 00101010 = 42$. Correct.

</details>

<details>
<summary>Worked Example: Two's Complement Subtraction (67 - 45)</summary>

Subtraction via addition of two's complement: $67 + (-45)$.

$67 = 01000011$

$45 = 00101101$

Two's complement of 45: invert $\to 11010010$, add $1 \to 11010011$

Now add:

```
  01000011
+ 11010011
  ---------
 100010110
```

Discard the 9th bit (overflow/carry): $00010110$

$00010110_2 = 16 + 4 + 2 = 22$

$67 - 45 = 22$. Correct.

</details>

### Floating Point Representation (IEEE 754)

Real numbers (numbers with fractional parts) are stored using IEEE 754 floating point format. The
standard defines single precision (32-bit) and double precision (64-bit).

**Single precision (32-bit) layout:**

| Bit range | Component | Bits |
| --------- | --------- | ---- |
| 31        | Sign      | 1    |
| 30--23    | Exponent  | 8    |
| 22--0     | Mantissa  | 23   |

**Value calculation:**

$$
\mathrm{Value} = (-1)^S \times 2^{E - 127} \times (1 + M)
$$

Where `S` is the sign bit, `E` is the exponent (stored as unsigned with bias 127), and `M` is the
mantissa (fractional part, with an implicit leading 1).

<details>
<summary>Worked Example: Convert -6.625 to IEEE 754 Single Precision</summary>

Step 1: Convert 6.625 to binary.

Integer part: $6 = 110$

Fractional part: $0.625 \times 2 = 1.25 \to 1$, $0.25 \times 2 = 0.5 \to 0$,
$0.5 \times 2 = 1.0 \to 1$

So $6.625_{10} = 110.101_2$

Step 2: Normalise to $1.M \times 2^E$.

$110.101 = 1.10101 \times 2^2$

Mantissa `M` = $10101$ (padded to 23 bits: $10101000000000000000000$)

Exponent `E` = $2 + 127 = 129 = 10000001_2$

Sign `S` = 1 (negative)

Step 3: Assemble.

$S\ E\ M = 1\ 10000001\ 10101000000000000000000$

In hex: $1\ 1000\ 0001\ 1010\ 1000\ 0000\ 0000\ 0000\ 0000 = \mathrm{C0D40000}_{16}$

</details>

| Feature           | Single Precision (32-bit)                             | Double Precision (64-bit)                               |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| Sign bit          | 1                                                     | 1                                                       |
| Exponent bits     | 8                                                     | 11                                                      |
| Mantissa bits     | 23                                                    | 52                                                      |
| Exponent bias     | 127                                                   | 1023                                                    |
| Approx. precision | 7 decimal digits                                      | 15--16 decimal digits                                   |
| Range (approx.)   | $\pm 1.2 \times 10^{-38}$ to $\pm 3.4 \times 10^{38}$ | $\pm 2.2 \times 10^{-308}$ to $\pm 1.8 \times 10^{308}$ |

---

## Character Encoding -- Deep Dive

Basic ASCII and Unicode properties are covered in [computer-systems.md](computer-systems.md). This
section examines the internal mechanics of encoding schemes.

### ASCII Design Properties

ASCII uses 7 bits to encode 128 characters. The 8th bit in Extended ASCII is used for additional
characters or parity checking.

Key structural properties of the ASCII table:

| Range (decimal) | Content                                     |
| --------------- | ------------------------------------------- |
| 0--31           | Control characters (NUL, CR, LF, TAB, etc.) |
| 32              | Space                                       |
| 48--57          | Digits '0'--'9'                             |
| 65--90          | Uppercase 'A'--'Z'                          |
| 97--122         | Lowercase 'a'--'z'                          |

**Conversion between uppercase and lowercase:** XOR with $32$ (bit 5). This works because the only
difference between uppercase and lowercase letters in ASCII is bit 5: uppercase has it clear (0),
lowercase has it set (1).

### Unicode Architecture

Unicode assigns a unique code point to every character. Code points are written as `U+XXXX` where
`XXXX` is a hexadecimal value. The Unicode space is divided into planes:

| Plane | Range              | Name                          |
| ----- | ------------------ | ----------------------------- |
| 0     | U+0000 -- U+FFFF   | Basic Multilingual Plane      |
| 1     | U+10000 -- U+1FFFF | Supplementary Multilingual    |
| 2     | U+20000 -- U+2FFFF | Supplementary Ideographic     |
| 14    | U+E0000 -- U+EFFFF | Supplementary Special-purpose |

### UTF-8 Encoding Mechanism

UTF-8 is a variable-width encoding that uses 1 to 4 bytes. The encoding rules are deterministic:

| Code Point Range    | Binary Pattern                        | Bytes | Hex Range          |
| ------------------- | ------------------------------------- | ----- | ------------------ |
| U+0000 -- U+007F    | `0xxxxxxx`                            | 1     | 00 -- 7F           |
| U+0080 -- U+07FF    | `110xxxxx 10xxxxxx`                   | 2     | C0 -- DF, 80 -- BF |
| U+0800 -- U+FFFF    | `1110xxxx 10xxxxxx 10xxxxxx`          | 3     | E0 -- EF, 80 -- BF |
| U+10000 -- U+10FFFF | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` | 4     | F0 -- F7, 80 -- BF |

The leading bits of the first byte indicate the total number of bytes in the character. All
continuation bytes start with `10`.

<details>
<summary>Worked Example: Encode 'A' (U+0041), euro sign (U+20AC), and a CJK character (U+4E2D) in UTF-8</summary>

**'A' = U+0041 = 0100 0001**

This falls in range U+0000 -- U+007F, so 1 byte.

UTF-8: `01000001` = `41` in hex.

**Euro sign = U+20AC = 0010 0000 1010 1100**

This falls in range U+0080 -- U+07FF, so 2 bytes.

Take the last 11 bits: `10 0000 1010 1100`

Byte 1: `110` + first 5 bits = `110 10000` = `D0`

Byte 2: `10` + last 6 bits = `10 101100` = `AC`

UTF-8: `D0 AC` (but correct is `E2 82 AC` -- wait, let me recalculate)

Actually U+20AC in binary: $20AC_{16} = 0010\ 0000\ 1010\ 1100_2$

This is 14 bits. Range U+0800 -- U+FFFF needs 3 bytes.

Byte 1: `1110` + first 4 bits = `1110 0010` = `E2`

Byte 2: `10` + next 6 bits = `10 000010` = `82`

Byte 3: `10` + last 6 bits = `10 101100` = `AC`

UTF-8: `E2 82 AC`. This is correct.

**'mid' (Chinese character) = U+4E2D = 0100 1110 0010 1101**

This is in range U+0800 -- U+FFFF, so 3 bytes.

Byte 1: `1110` + `0100` = `1110 0100` = `E4`

Byte 2: `10` + `111000` = `10 111000` = `B8`

Byte 3: `10` + `101101` = `10 101101` = `AD`

UTF-8: `E4 B8 AD`

</details>

### Encoding Comparison

| Feature            | ASCII       | UTF-8        | UTF-16        | UTF-32              |
| ------------------ | ----------- | ------------ | ------------- | ------------------- |
| Code unit size     | 7 bits      | 1--4 bytes   | 2 or 4 bytes  | 4 bytes             |
| ASCII compat.      | Yes (self)  | Yes (1-byte) | No            | No                  |
| Max code point     | U+007F      | U+10FFFF     | U+10FFFF      | U+10FFFF            |
| Storage (English)  | 1 byte/char | 1 byte/char  | 2 bytes/char  | 4 bytes/char        |
| Storage (CJK)      | N/A         | 3 bytes/char | 2 bytes/char  | 4 bytes/char        |
| Self-synchronising | No          | Yes          | Partially     | Yes                 |
| Most common use    | Legacy      | Web, Linux   | Windows, Java | Internal processing |

---

## Image Representation -- Extended Coverage

Basic image concepts (pixels, resolution, colour depth, bitmap vs vector, file size calculation) are
in [computer-systems.md](computer-systems.md). This section covers colour models and file format
internals.

### Colour Models

#### RGB (Red, Green, Blue)

Additive colour model used for screens and digital displays. Each colour channel is typically 8 bits
(0--255), giving 24-bit true colour.

| Channel | Bits | Values          |
| ------- | ---- | --------------- |
| Red     | 8    | 0 (none) -- 255 |
| Green   | 8    | 0 (none) -- 255 |
| Blue    | 8    | 0 (none) -- 255 |

Black = (0, 0, 0). White = (255, 255, 255). Pure red = (255, 0, 0).

In hex notation: #RRGGBB. For example, #FF0000 is red, #00FF00 is green, #0000FF is blue.

#### CMYK (Cyan, Magenta, Yellow, Key/Black)

Subtractive colour model used in printing. Each component represents the amount of ink.

| Channel | Description                      |
| ------- | -------------------------------- |
| C       | Cyan (0% = none, 100% = full)    |
| M       | Magenta                          |
| Y       | Yellow                           |
| K       | Key (Black) -- reduces ink usage |

CMYK is necessary because printing inks are subtractive (absorb light), unlike screen pixels which
are additive (emit light). Pure CMY black is imperfect (appears muddy), so a separate black ink
channel (K) is added.

**RGB to CMYK conversion (simplified):**

$$
K = 1 - \max(R', G', B')
$$

$$
C = \frac{1 - R' - K}{1 - K}
$$

Where $R' = R / 255$, etc.

### Image File Formats -- Technical Specifications

#### JPEG (Joint Photographic Experts Group)

| Property         | Value                                    |
| ---------------- | ---------------------------------------- |
| Compression      | Lossy                                    |
| Colour model     | YCbCr (luminance + chrominance)          |
| Max colour depth | 24-bit (8 bits per channel)              |
| Transparency     | No (JPEG does not support alpha channel) |
| Animation        | No                                       |
| Best for         | Photographs, complex colour images       |

JPEG compression pipeline:

1. **Colour space conversion:** RGB is converted to YCbCr. The chrominance channels (Cb, Cr) can be
   subsampled (e.g., 4:2:0) because the human eye is less sensitive to colour detail than to
   brightness.
2. **Block splitting:** The image is divided into $8 \times 8$ pixel blocks.
3. **Discrete Cosine Transform (DCT):** Each block is transformed from spatial domain to frequency
   domain. Low frequencies (top-left of the DCT matrix) represent gradual changes; high frequencies
   (bottom-right) represent fine detail.
4. **Quantisation:** Each DCT coefficient is divided by a quantisation value from a quantisation
   table. Higher values discard more information. This is the primary lossy step.
5. **Entropy coding:** The quantised coefficients are encoded using run-length encoding and Huffman
   coding (lossless steps).

**Quality factor:** Most JPEG encoders expose a quality parameter (1--100 or 1--100%). Higher
quality = larger file. At quality 75, most artefacts are imperceptible.

#### PNG (Portable Network Graphics)

| Property         | Value                                         |
| ---------------- | --------------------------------------------- |
| Compression      | Lossless                                      |
| Colour model     | RGB, RGBA, palette-based (up to 256 colours)  |
| Max colour depth | 48-bit (RGB) or 64-bit (RGBA)                 |
| Transparency     | Yes (full alpha channel support)              |
| Animation        | Limited (APNG extension)                      |
| Best for         | Graphics with text, sharp edges, transparency |

PNG compression pipeline:

1. **Filtering:** A prediction filter is applied to each row (None, Sub, Up, Average, Paeth). The
   filter that produces the smallest result is selected. This step transforms the data to have many
   small values and zeros.
2. **DEFLATE compression:** The filtered data is compressed using a combination of LZ77 (sliding
   window dictionary compression) and Huffman coding.

#### GIF (Graphics Interchange Format)

| Property         | Value                                 |
| ---------------- | ------------------------------------- |
| Compression      | Lossless (LZW)                        |
| Colour model     | Palette-based, max 256 colours        |
| Max colour depth | 8-bit (indexed colour)                |
| Transparency     | Yes (1-bit, binary transparency)      |
| Animation        | Yes (multiple frames, timing control) |
| Best for         | Simple graphics, logos, animations    |

GIF uses LZW (Lempel-Ziv-Welch) compression, a dictionary-based lossless algorithm. The colour
limitation (256 colours) makes GIF unsuitable for photographs but ideal for simple graphics and
animations.

#### SVG (Scalable Vector Graphics)

| Property      | Value                                    |
| ------------- | ---------------------------------------- |
| Type          | Vector                                   |
| Compression   | Text-based (XML), can be gzip-compressed |
| Scalability   | Infinite (mathematical description)      |
| Interactivity | Yes (supports CSS and JavaScript)        |
| Best for      | Logos, icons, diagrams, charts           |

SVG describes images using XML elements: `<circle>`, `<rect>`, `<path>`, `<polygon>`, etc. Each
element has attributes for position, size, colour, and style.

#### BMP (Bitmap)

| Property     | Value                  |
| ------------ | ---------------------- |
| Compression  | None (uncompressed)    |
| Colour depth | 1, 4, 8, 16, 24, 32    |
| Transparency | Limited (32-bit alpha) |
| Best for     | Raw image storage      |

BMP stores raw pixel data with a minimal header. Files are large but lossless and universally
supported.

### File Format Comparison

| Feature      | JPEG   | PNG          | GIF        | BMP      | SVG         |
| ------------ | ------ | ------------ | ---------- | -------- | ----------- |
| Type         | Bitmap | Bitmap       | Bitmap     | Bitmap   | Vector      |
| Compression  | Lossy  | Lossless     | Lossless   | None     | Lossless    |
| Max colours  | 16.7M  | 16.7M / 281T | 256        | 16.7M    | Unlimited   |
| Transparency | No     | Full alpha   | Binary     | Limited  | Full alpha  |
| Animation    | No     | APNG         | Yes        | No       | SMIL/CSS/JS |
| File size    | Small  | Medium       | Small      | Large    | Small--Med  |
| Best for     | Photos | Graphics     | Animations | Raw data | Logos/diags |

---

## Sound Representation -- Extended Coverage

Basic sound digitisation concepts are in [computer-systems.md](computer-systems.md). This section
covers audio file formats and compression.

### Audio File Formats

| Format | Compression  | Bit depth  | Sampling rate | Channels | Typical use           |
| ------ | ------------ | ---------- | ------------- | -------- | --------------------- |
| WAV    | Uncompressed | 8/16/24/32 | Up to 192 kHz | 1--8     | Studio, archival      |
| MP3    | Lossy        | N/A        | Up to 48 kHz  | 1--2     | Music distribution    |
| AAC    | Lossy        | N/A        | Up to 96 kHz  | 1--48    | Streaming, Apple      |
| FLAC   | Lossless     | 16/24      | Up to 655 kHz | 1--8     | Archival, audiophile  |
| OGG    | Lossy        | N/A        | Up to 192 kHz | 1--255   | Open-source streaming |
| MIDI   | N/A          | N/A        | N/A           | 16       | Music production      |

### MP3 Compression (Perceptual Coding)

MP3 uses **perceptual audio coding** -- it discards sounds that the human ear cannot perceive, based
on psychoacoustic models.

Key psychoacoustic principles exploited:

1. **Absolute threshold of hearing:** Sounds below a certain volume at a given frequency are
   inaudible. These are discarded.
2. **Auditory masking:** A loud sound at one frequency can mask (hide) a quieter sound at a nearby
   frequency. Masked sounds are discarded.
3. **Frequency resolution:** The ear is more sensitive to mid-range frequencies (1--4 kHz) than to
   very low or very high frequencies. Less data is allocated to less sensitive ranges.

**MP3 encoding process:**

1. **FFT analysis:** The audio signal is analysed using the Modified Discrete Cosine Transform
   (MDCT) to decompose it into frequency components.
2. **Psychoacoustic model:** A model determines which frequency components are audible and which are
   masked.
3. **Quantisation:** Audible components are quantised with sufficient precision; masked components
   are quantised coarsely or discarded entirely.
4. **Huffman coding:** The quantised data is further compressed using lossless Huffman coding.

**Bitrate and quality:**

| Bitrate (kbps) | Quality     | Approx. compression ratio vs CD |
| -------------- | ----------- | ------------------------------- |
| 320            | Transparent | ~4.4 : 1                        |
| 256            | High        | ~5.5 : 1                        |
| 192            | Good        | ~7.4 : 1                        |
| 128            | Acceptable  | ~11 : 1                         |
| 64             | Low         | ~22 : 1                         |

### MIDI (Musical Instrument Digital Interface)

MIDI does not store actual audio. Instead, it stores **instructions** that describe how to produce
sound: which note to play, when to play it, how loud, for how long, and which instrument to use.

| Aspect        | Audio (WAV/MP3)       | MIDI                       |
| ------------- | --------------------- | -------------------------- |
| Stores        | Actual sound waveform | Performance instructions   |
| File size     | Large                 | Very small                 |
| Sound quality | Fixed at creation     | Depends on playback device |
| Editability   | Limited               | Fully editable (notes)     |
| Instrument    | Fixed                 | Changeable                 |

A MIDI file might contain instructions like: "Play middle C on piano at velocity 80 for 500
milliseconds." The actual sound depends entirely on the synthesiser or sound module that plays back
the MIDI data.

---

## Data Compression

### Lossy vs Lossless -- Detailed Comparison

| Aspect             | Lossless Compression                    | Lossy Compression                    |
| ------------------ | --------------------------------------- | ------------------------------------ |
| Data integrity     | Fully preserved                         | Some data permanently lost           |
| Decompression      | Produces exact original                 | Produces approximation               |
| Compression ratio  | Typically 2:1 -- 3:1                    | Can exceed 10:1                      |
| Re-compressibility | Can be recompressed losslessly          | Further compression degrades quality |
| Suitability        | Text, code, executables, medical images | Audio, video, photos                 |
| Algorithms         | RLE, Huffman, LZW, DEFLATE, FLAC        | JPEG, MP3, AAC, H.264                |

A critical constraint: lossy compression is **never** acceptable for text, source code, or
executable files because even a single bit error changes meaning. Lossy compression is only
acceptable for media where small inaccuracies are perceptually tolerable.

### Run-Length Encoding (RLE)

RLE replaces consecutive runs of identical data with a count-value pair. It is most effective on
data with long runs of repeated values (e.g., simple graphics, fax transmissions).

**Encoding rule:** For each run of identical bytes, store the count followed by the value.

<details>
<summary>Worked Example: RLE Encode and Decode</summary>

**Encode:** Given the pixel data `WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB`

Step 1: Identify runs.

12W, 1B, 12W, 3B, 24W, 1B

Step 2: Write as count-value pairs.

`12W 1B 12W 3B 24W 1B`

Compressed: 12 tokens vs 67 characters original. Compression ratio: $67 / 12 \approx 5.6 : 1$

**Decode:** Given the RLE data `5A 3B 8C 1A`

Expand each pair: `AAAAA BBB CCCCCCCC A`

Result: `AAAAABBBCCCCCCCCA` (17 characters from 8 tokens)

</details>

**Limitations of RLE:**

Data with no repeated values (e.g., `ABCDE`) expands rather than compresses under RLE: each byte
becomes two bytes (count + value), doubling the size. RLE is only effective when the data has
sufficient redundancy in the form of consecutive repeated values.

### Huffman Coding

Huffman coding is a lossless compression algorithm that assigns variable-length codes to characters,
with shorter codes assigned to more frequent characters and longer codes to less frequent
characters.

**Algorithm:**

1. Count the frequency of each symbol in the input.
2. Create a leaf node for each symbol, weighted by its frequency.
3. Repeatedly combine the two nodes with the lowest frequencies into a new internal node (whose
   frequency is the sum of its children).
4. Assign 0 to the left branch and 1 to the right branch of each internal node.
5. The code for each symbol is the path from the root to its leaf.

Huffman codes are **prefix-free**: no code is a prefix of another code. This property guarantees
unambiguous decoding.

<details>
<summary>Worked Example: Build a Huffman Tree and Encode a Message</summary>

Given the message `BCCABBDDAECCBBAEDDCC` (19 characters).

**Step 1: Count frequencies.**

| Symbol | Count |
| ------ | ----- |
| A      | 4     |
| B      | 5     |
| C      | 6     |
| D      | 4     |
| E      | 2     |
| Total  | 21    |

Wait, let me recount. `B C C A B B D D A E C C B B A E D D C C`

A: 3, B: 5, C: 6, D: 4, E: 2. Total = 20.

Actually the string is `BCCABBDDAECCBBAEDDCC` = 20 characters.

A: positions 4, 9, 14 = 3

B: positions 1, 5, 6, 12, 13 = 5

C: positions 2, 3, 10, 11, 18, 19 = 6

D: positions 7, 8, 16, 17 = 4

E: positions 15 (wait, let me recount)

`B C C A B B D D A E C C B B A E D D C C`

Positions: 1=B, 2=C, 3=C, 4=A, 5=B, 6=B, 7=D, 8=D, 9=A, 10=E, 11=C, 12=C, 13=B, 14=B, 15=A, 16=E,
17=D, 18=D, 19=C, 20=C

A: 4, 9, 15 = 3

B: 1, 5, 6, 13, 14 = 5

C: 2, 3, 11, 12, 19, 20 = 6

D: 7, 8, 17, 18 = 4

E: 10, 16 = 2

Total = 20. Correct.

**Step 2: Build the Huffman tree.**

Initial nodes (sorted by frequency): E(2), A(3), D(4), B(5), C(6)

Combine E(2) + A(3) = EA(5)

Now: D(4), B(5), EA(5), C(6)

Combine D(4) + B(5) = DB(9)

Now: EA(5), C(6), DB(9)

Combine EA(5) + C(6) = EAC(11)

Now: DB(9), EAC(11)

Combine DB(9) + EAC(11) = root(20)

```
          root(20)
         /        \
      DB(9)      EAC(11)
     /    \      /     \
   D(4)  B(5)  EA(5)  C(6)
               /   \
             E(2)  A(3)
```

**Step 3: Assign codes (left=0, right=1).**

D: 00

B: 01

E: 100

A: 101

C: 11

**Step 4: Encode the message.**

`B C C A B B D D A E C C B B A E D D C C`

`01 11 11 101 01 01 00 00 101 100 11 11 01 01 101 100 00 00 11 11`

Total encoded bits:
$2 + 2 + 2 + 3 + 2 + 2 + 2 + 2 + 3 + 3 + 2 + 2 + 2 + 2 + 3 + 3 + 2 + 2 + 2 + 2 = 41$ bits

Original at 5 bits per symbol (minimum for 5 symbols): $20 \times 5 = 100$ bits.

Original at 8 bits per symbol (ASCII): $20 \times 8 = 160$ bits.

Compression ratio vs ASCII: $160 / 41 \approx 3.9 : 1$

</details>

### Dictionary-Based Compression (LZW)

Lempel-Ziv-Welch (LZW) compression builds a dictionary of recurring sequences during encoding.

**Algorithm overview:**

1. Initialise dictionary with all single-character entries (0--255 for 8-bit data).
2. Read input character by character, building a string `P`.
3. If `P + next_char` is in the dictionary, extend `P`.
4. If not, output the dictionary index for `P`, add `P + next_char` to the dictionary, and reset `P`
   to `next_char`.
5. After all input is consumed, output the code for the remaining `P`.

LZW is used in GIF compression and Unix `compress`. It typically achieves 2:1 compression on English
text and better on data with repeated patterns.

### Compression Ratio Calculations

$$
\mathrm{Compression Ratio} = \frac{\mathrm{Original Size}}{\mathrm{Compressed Size}}
$$

$$
\mathrm{Space Savings (\%)} = \left(1 - \frac{\mathrm{Compressed Size}}{\mathrm{Original Size}}\right) \times 100\%
$$

<details>
<summary>Worked Example: Compression Ratio</summary>

A text file is 500 KB. After lossless compression, it is 180 KB.

Compression ratio: $500 / 180 \approx 2.78 : 1$

Space savings: $(1 - 180/500) \times 100\% = 64\%$

A 3 MB WAV audio file is compressed to 300 KB using MP3.

Compression ratio: $3072 / 300 \approx 10.24 : 1$

Space savings: $(1 - 300/3072) \times 100\% \approx 90.2\%$

</details>

---

## File Formats -- Comprehensive Reference

| Format | Type     | Compression | Description                                  | Typical Use Case              |
| ------ | -------- | ----------- | -------------------------------------------- | ----------------------------- |
| JPEG   | Image    | Lossy       | Lossy image compression using DCT            | Photographs                   |
| PNG    | Image    | Lossless    | Lossless with filtering + DEFLATE            | Graphics, screenshots, web    |
| GIF    | Image    | Lossless    | Palette-based (max 256 colours), LZW         | Simple animations, logos      |
| BMP    | Image    | None        | Uncompressed bitmap                          | Raw image storage, Windows    |
| SVG    | Image    | Lossless    | XML-based vector format                      | Icons, logos, diagrams        |
| TIFF   | Image    | Lossless    | High-quality, supports layers                | Print, publishing, scanning   |
| WAV    | Audio    | None        | Uncompressed PCM audio                       | Studio recording, editing     |
| MP3    | Audio    | Lossy       | Perceptual audio coding                      | Music distribution, streaming |
| AAC    | Audio    | Lossy       | Advanced perceptual coding (better than MP3) | Apple, YouTube, streaming     |
| FLAC   | Audio    | Lossless    | Free Lossless Audio Codec                    | Archival, audiophile          |
| MIDI   | Audio    | N/A         | Musical instructions, not actual sound       | Music production, notation    |
| MP4    | Video    | Lossy       | Container (H.264 video + AAC audio)          | Video streaming, distribution |
| AVI    | Video    | Varies      | Microsoft container format                   | Legacy video                  |
| MKV    | Video    | Varies      | Open-source container, supports many codecs  | High-quality video            |
| PDF    | Document | Lossless    | Portable Document Format (text + graphics)   | Forms, reports, printing      |
| DOCX   | Document | Lossless    | Microsoft Word (XML-based)                   | Word processing               |
| XLSX   | Document | Lossless    | Microsoft Excel (XML-based)                  | Spreadsheets                  |
| CSV    | Data     | None        | Comma-separated values, plain text           | Data exchange                 |
| HTML   | Markup   | None        | HyperText Markup Language                    | Web pages                     |
| CSS    | Markup   | None        | Cascading Style Sheets                       | Web styling                   |
| JS     | Code     | None        | JavaScript source code                       | Web interactivity             |

---

## Error Detection and Correction

### Why Error Detection Matters

When data is transmitted or stored, bit errors can occur due to electrical interference, hardware
faults, or media degradation. Error detection identifies when errors have occurred; error correction
reconstructs the original data.

### Parity Bits

A parity bit is a single extra bit appended to a unit of data (typically a byte) to make the total
number of 1s either even (even parity) or odd (odd parity).

**Even parity:** The parity bit is set so that the total number of 1s (including the parity bit) is
even.

**Odd parity:** The parity bit is set so that the total number of 1s is odd.

<details>
<summary>Worked Example: Even Parity Encoding and Error Detection</summary>

**Encoding with even parity:**

| Data    | Number of 1s | Parity bit | Transmitted |
| ------- | ------------ | ---------- | ----------- |
| 1011001 | 4            | 0          | 10110010    |
| 1011011 | 5            | 1          | 10110111    |
| 0000000 | 0            | 0          | 00000000    |
| 1111111 | 7            | 1          | 11111111    |

**Error detection:** If the received byte `10110010` is received as `10110110`, the number of 1s is
5 (odd), which violates even parity. An error is detected.

**Limitation:** Parity can detect an odd number of bit errors but cannot detect an even number of
bit errors (e.g., two flipped bits preserve parity). Parity cannot correct errors -- it only signals
that an error occurred.

</details>

### Parity Check Matrix (Two-Dimensional Parity)

Data is arranged in a rectangular grid. Each row has a parity bit, and each column has a parity bit.
This allows detection of up to 3-bit errors and can correct single-bit errors by identifying the
intersection of the row and column where parity fails.

<details>
<summary>Worked Example: Two-Dimensional Parity</summary>

Data: `1011`, `0110`, `1100`, `0011`

Arrange in grid with row and column parity:

```
        C1  C2  C3  C4  |  RP
        --- --- --- --- | ---
  R1:    1   0   1   1  |  1
  R2:    0   1   1   0  |  0
  R3:    1   1   0   0  |  0
  R4:    0   0   1   1  |  0
        --- --- --- --- | ---
  CP:    0   0   1   0  |  0
```

If bit at R2, C3 flips from 1 to 0 during transmission:

Row 2 parity check: 0 + 1 + 0 + 0 = 1 (odd, error detected)

Column 3 parity check: 1 + 0 + 0 + 1 = 0 (wait, let me recalculate)

Received column 3: R1=1, R2=0(flipped), R3=0, R4=1 = 1+0+0+1 = 2 (even)

CP for column 3 is 0 (even parity requires even). 2 is even, so column parity passes.

Hmm, this shows that a single-bit error is detected by row parity but may not be detected by column
parity alone. However, with the row parity failing at R2 and column parity passing, we know there is
an error but cannot pinpoint it with certainty unless both row and column parity fail.

Actually, let me recalculate. If the original CP for C3 was computed as 1 (because 1+1+0+1 = 3, odd,
so CP = 1 to make even), then after the flip: 1+0+0+1 = 2 (even), CP = 0. The received CP is 1, so
column 3 parity also fails. Both row 2 and column 3 fail, pinpointing the error at R2, C3.

</details>

### Checksums

A checksum is a value computed from the data that is transmitted alongside it. The receiver
recomputes the checksum and compares.

**Simple checksum:** Sum all bytes (mod 256), transmit the sum. Receiver sums received data and
checks if the total matches.

<details>
<summary>Worked Example: Simple Checksum</summary>

Data: `200`, `150`, `75`, `180`, `45`

Checksum = $(200 + 150 + 75 + 180 + 45) \mod 256 = 650 \mod 256 = 138$

Transmitted: `200`, `150`, `75`, `180`, `45`, `138`

Receiver computes: $(200 + 150 + 75 + 180 + 45 + 138) \mod 256 = 788 \mod 256 = 20$

For a valid checksum, the receiver's total (data + checksum) mod 256 should equal 0. Here
$788 \mod
256 = 20 \neq 0$.

Using the one's complement approach: checksum = one's complement of the sum.

Sum = 650 = $10\ 10001\ 0010_2$

One's complement: $01\ 01110\ 1101_2 = 365$

Verify: $(650 + 365) \mod 256 = 1015 \mod 256 = 243$. This should be all 1s (255) for valid.

Actually, the standard checksum method: checksum = $(2^{16} - 1 - \mathrm{sum}) \mod (2^{16})$ for
16-bit, or equivalently the one's complement of the sum. The receiver adds all bytes including
checksum; if no errors, the result is all 1s (e.g., 255 for 8-bit, 65535 for 16-bit).

</details>

Checksums are fast to compute but have limited error detection capability. Different error patterns
can produce the same checksum, leading to undetected errors.

### Hamming Code

Hamming code is an error-correcting code that can detect 2-bit errors and correct 1-bit errors. It
adds multiple parity bits at specific positions (powers of 2) within the data.

**For m data bits, the number of parity bits r needed satisfies:**

$$
2^r \ge m + r + 1
$$

| Data bits (m) | Parity bits (r) | Total bits (m + r) |
| ------------- | --------------- | ------------------ |
| 4             | 3               | 7                  |
| 8             | 4               | 12                 |
| 11            | 4               | 15                 |
| 16            | 5               | 21                 |

Parity bits are placed at positions 1, 2, 4, 8, 16, ... (powers of 2). Each parity bit covers
specific data bit positions based on the binary representation of the position number.

<details>
<summary>Worked Example: Hamming (7,4) Code -- Encode and Correct</summary>

**Encode the 4-bit data word 1011 using Hamming (7,4).**

Positions: P1 P2 D3 P4 D5 D6 D7

Data bits: D3=1, D5=0, D6=1, D7=1

**Parity bit calculations (even parity):**

P1 (covers positions 1,3,5,7): P1 + D3 + D5 + D7 = even. P1 + 1 + 0 + 1 = even. P1 = 0.

P2 (covers positions 2,3,6,7): P2 + D3 + D6 + D7 = even. P2 + 1 + 1 + 1 = even. P2 = 1.

P4 (covers positions 4,5,6,7): P4 + D5 + D6 + D7 = even. P4 + 0 + 1 + 1 = even. P4 = 0.

Transmitted: P1 P2 D3 P4 D5 D6 D7 = 0 1 1 0 0 1 1

**Error correction scenario:**

Suppose bit 5 flips during transmission. Received: 0 1 1 0 1 1 1

Recalculate parity:

P1 check (positions 1,3,5,7): 0 + 1 + 1 + 1 = 3 (odd, fail). Syndrome bit 1 = 1.

P2 check (positions 2,3,6,7): 1 + 1 + 1 + 1 = 4 (even, pass). Syndrome bit 2 = 0.

P4 check (positions 4,5,6,7): 0 + 1 + 1 + 1 = 3 (odd, fail). Syndrome bit 4 = 1.

Syndrome = $101_2 = 5$ (decimal). The error is at position 5.

Flip bit 5: 0 1 1 0 **0** 1 1. Corrected data: D3=1, D5=0, D6=1, D7=1 = 1011.

</details>

### CRC (Cyclic Redundancy Check)

CRC is a more powerful error detection method based on polynomial division. The data is treated as a
binary polynomial, divided by a predetermined generator polynomial, and the remainder (the CRC) is
appended to the data.

**Process:**

1. Append `r` zero bits to the data (where `r` is the degree of the generator polynomial).
2. Divide the extended data polynomial by the generator polynomial using XOR-based binary division.
3. The remainder is the CRC value.
4. Transmit data + CRC.
5. The receiver divides the received data (including CRC) by the same generator polynomial. If the
   remainder is zero, no errors are detected.

| CRC Variant | Generator Polynomial           | Bit Length | Common Use         |
| ----------- | ------------------------------ | ---------- | ------------------ |
| CRC-8       | Various                        | 8          | Simple protocols   |
| CRC-16      | $x^{16} + x^{15} + x^2 + 1$    | 16         | Modbus, USB        |
| CRC-32      | $x^{32} + \ldots$ (IEEE 802.3) | 32         | Ethernet, ZIP, PNG |

CRC can detect all single-bit errors, all double-bit errors, any odd number of errors, and any burst
error of length $\le r$ bits (where `r` is the CRC bit length). CRC-32 can detect 99.997% of all
possible error patterns.

### Error Detection vs Correction Comparison

| Method       | Detection Capability      | Correction | Overhead                   |
| ------------ | ------------------------- | ---------- | -------------------------- |
| Parity bit   | Single-bit errors         | None       | 1 bit per byte             |
| 2D parity    | 3-bit errors              | Single-bit | Row + column bits          |
| Checksum     | Limited (collision-prone) | None       | 8/16/32 bits               |
| CRC          | Very high (burst errors)  | None       | 8/16/32 bits               |
| Hamming code | 2-bit errors              | Single-bit | $r$ bits for $m$ data bits |

---

## Common Pitfalls

1. **Two's complement range:** For n bits, the range is $-2^{n-1}$ to $2^{n-1} - 1$, NOT $-2^{n-1}$
   to $2^{n-1}$. The asymmetry exists because zero uses one of the positive representations.

2. **UTF-8 byte patterns:** Continuation bytes always start with `10`. The first byte's leading bits
   tell you how many total bytes the character uses. Do not confuse continuation bytes with the
   first byte of a multi-byte character.

3. **JPEG cannot support transparency:** If you need transparency (alpha channel), use PNG or GIF.
   JPEG is designed purely for lossy photographic compression.

4. **GIF colour limit:** GIF supports a maximum of 256 colours per frame. It is unsuitable for
   photographs but ideal for simple graphics with few colours.

5. **Huffman code assignment:** Shorter codes must go to more frequent symbols. The tree structure
   ensures prefix-free property, but you must verify that no code is a prefix of another.

6. **RLE expansion:** RLE doubles the size of data with no repeated values (e.g., alternating
   patterns like `ABABAB`). Always consider the data characteristics before choosing RLE.

7. **Hamming code positions:** Parity bits go at positions that are powers of 2 (1, 2, 4, 8, ...).
   Data bits fill the remaining positions in order.

8. **Parity only detects odd errors:** If two bits flip simultaneously, even parity is preserved and
   the error goes undetected. For more robust detection, use CRC or Hamming codes.

9. **MP3 is lossy:** MP3 compression permanently discards audio data. Converting MP3 back to WAV
   does not restore the lost quality -- it simply stores the lossy data in an uncompressed format.

10. **Colour depth vs palette size:** 8-bit colour depth in a palette-based format (GIF) means 256
    possible colours (not 256 bits). 8-bit true colour would be 256 colours total, not per channel.

---

## Practice Problems

<details>
<summary>Question 1: Octal and Binary Arithmetic</summary>

(a) Convert $345_8$ to decimal and binary.

(b) Perform binary subtraction: $11010110_2 - 01101011_2$ using two's complement.

(c) Represent $-98$ in 8-bit two's complement.

Answer:

(a) $3 \times 64 + 4 \times 8 + 5 = 192 + 32 + 5 = 229_{10}$

Binary: $3 = 011$, $4 = 100$, $5 = 101$. So $345_8 = 011100101_2 = 11100101_2$

(b) Two's complement of $01101011$: invert $\to 10010100$, add $1 \to 10010101$

```
  11010110
+ 10010101
  ---------
 101101011
```

Discard carry: $01101011_2 = 107_{10}$

Check: $214 - 107 = 107_{10}$. $01101011_2 = 64 + 32 + 8 + 2 + 1 = 107$. Correct.

(c) $98 = 64 + 32 + 2 = 01100010$

Invert: $10011101$, add $1$: $10011110$

So $-98$ in 8-bit two's complement is $10011110$.

</details>

<details>
<summary>Question 2: UTF-8 Encoding</summary>

(a) Encode the character 'Z' (U+005A) in UTF-8. Show all steps.

(b) A UTF-8 encoded file contains the bytes `C3 A9`. What character does this represent?

(c) Why does UTF-8 have a self-synchronising property, and why is this important?

Answer:

(a) U+005A = $01011010_2$. This is in range U+0000 -- U+007F (1 byte). UTF-8: `01011010` = `5A` hex.

(b) First byte `C3` = $11000011$. This starts with `110`, so it is a 2-byte sequence.

Second byte `A9` = $10101001$. This starts with `10`, confirming it is a continuation byte.

Extract bits: first byte contributes `00011` (last 5 bits), second byte contributes `101001` (last 6
bits).

Code point: $00011\ 101001 = 000011101001_2 = 0x0E9 = 233_{10} = U+00E9$

U+00E9 is the character 'e' with acute accent: e-acute.

(c) UTF-8 is self-synchronising because: (1) the leading byte's pattern (`0`, `110`, `1110`,
`11110`) determines the character length; (2) continuation bytes always start with `10`, so a reader
can identify the start of any character by scanning forward. This means if a byte is corrupted or
lost, the decoder can resynchronise at the next valid character boundary, rather than corrupting all
subsequent text.

</details>

<details>
<summary>Question 3: Image File Formats</summary>

A graphic designer needs to save images in various scenarios. Recommend the most appropriate format
and justify your choice for each:

(a) A photograph for a website background (needs small file size, no transparency needed).

(b) A company logo with transparent background for overlay on different coloured backgrounds.

(c) A simple animated banner with solid colours.

(d) An image of a circuit diagram that must be perfectly sharp at any zoom level.

Answer:

(a) **JPEG** at quality 70--85. JPEG provides excellent lossy compression for photographs, producing
small files. No transparency is needed, so JPEG's lack of alpha channel is not a limitation.

(b) **PNG** with alpha channel. PNG supports full transparency via an alpha channel, allowing the
logo to blend smoothly over any background. The lossless compression preserves sharp edges and text
quality, which is critical for logos. SVG would also work if the logo is a vector design.

(c) **GIF**. GIF supports animation with multiple frames and timing control, uses a palette of up to
256 colours (sufficient for solid-colour banners), and produces small files via LZW compression.

(d) **SVG** (Scalable Vector Graphics). SVG uses mathematical descriptions of shapes, so it scales
to any size without pixelation or quality loss. This is essential for technical diagrams that may be
viewed at different zoom levels or printed at different sizes.

</details>

<details>
<summary>Question 4: RLE and Huffman Coding</summary>

(a) Apply run-length encoding to the data: `AAAAAAABBBCCCCDDDDDDDEEEEE`

(b) Given the following frequency table, construct a Huffman tree and determine the code for each
symbol:

| Symbol | Frequency |
| ------ | --------- |
| X      | 7         |
| Y      | 3         |
| Z      | 5         |
| W      | 1         |

(c) Calculate the average bits per symbol for the Huffman codes in (b).

Answer:

(a) Runs: 7A, 3B, 4C, 7D, 5E

RLE: `7A 3B 4C 7D 5E` (10 tokens vs 26 characters original)

Compression ratio: $26 / 10 = 2.6 : 1$

(b) Initial nodes (sorted): W(1), Y(3), Z(5), X(7)

Combine W(1) + Y(3) = WY(4)

Now: Z(5), WY(4), X(7)

Combine WY(4) + Z(5) = WYZ(9)

Now: X(7), WYZ(9)

Combine X(7) + WYZ(9) = root(16)

```
         root(16)
        /        \
     X(7)      WYZ(9)
              /     \
           WY(4)    Z(5)
           /   \
         W(1)  Y(3)
```

Codes: X = 0, W = 100, Y = 101, Z = 11

(c) Total symbols = 16. Total bits =
$7 \times 1 + 1 \times 3 + 3 \times 3 + 5 \times 2 = 7 + 3 + 9 + 10 = 29$

Average bits per symbol = $29 / 16 = 1.8125$ bits

Fixed-width (2 bits for 4 symbols) would give 32 bits total. Huffman saves 3 bits.

</details>

<details>
<summary>Question 5: Error Detection and Correction</summary>

(a) Using even parity, what parity bit should be added to the byte `11010101`?

(b) Data `1010` is encoded using Hamming (7,4) code. A single-bit error occurs during transmission,
and the received word is `0110110`. Determine which bit is in error and correct it.

(c) Explain why a simple parity bit cannot correct errors, only detect them.

Answer:

(a) Count of 1s in `11010101` = 5 (odd). For even parity, parity bit = 1 (to make total even: 6).

Transmitted: `110101011`

(b) Received: `0110110` (positions 1--7)

Check each parity group:

P1 (positions 1,3,5,7): bits at 1=0, 3=1, 5=1, 7=0. Sum = 2 (even, pass). S1 = 0.

P2 (positions 2,3,6,7): bits at 2=1, 3=1, 6=1, 7=0. Sum = 3 (odd, fail). S2 = 1.

P4 (positions 4,5,6,7): bits at 4=0, 5=1, 6=1, 7=0. Sum = 2 (even, pass). S4 = 0.

Syndrome = $010_2 = 2$. Error at position 2.

Corrected: flip bit 2 from 1 to 0: `0010110`

Data bits (positions 3,5,6,7): D3=1, D5=0, D6=1, D7=0. Original data = 1010.

(c) A single parity bit can only indicate that an error occurred (parity mismatch), but it provides
no information about which bit flipped. Since any of the n+1 bits (n data + 1 parity) could be the
error, the receiver cannot determine the error location and therefore cannot correct it. Correction
requires additional redundancy that provides positional information, such as the multiple parity
bits in Hamming code, each covering different subsets of bit positions.

</details>

<details>
<summary>Question 6: Floating Point and Sound Calculations</summary>

(a) A 24-bit colour image has dimensions $3840 \times 2160$ (4K resolution). Calculate the
uncompressed file size in MB.

(b) A 5-minute stereo audio recording uses a sampling rate of 48 kHz with 24-bit depth. Calculate
the file size in MB (uncompressed WAV).

(c) If the audio in (b) is compressed to MP3 at 320 kbps, what is the compressed file size in MB?

(d) Calculate the compression ratio.

Answer:

(a)

$$
\mathrm{Size (bits)} = 3840 \times 2160 \times 24 = 198180480 \mathrm{ bits}
$$

$$
\mathrm{Size (bytes)} = \frac{198180480}{8} = 24772560 \mathrm{ bytes}
$$

$$
\mathrm{Size (MB)} = \frac{24772560}{1024 \times 1024} \approx 23.63 \mathrm{ MB}
$$

(b)

$$
\mathrm{Duration} = 5 \times 60 = 300 \mathrm{ s}
$$

$$
\mathrm{Size (bits)} = 48000 \times 24 \times 300 \times 2 = 691200000 \mathrm{ bits}
$$

$$
\mathrm{Size (bytes)} = \frac{691200000}{8} = 86400000 \mathrm{ bytes}
$$

$$
\mathrm{Size (MB)} = \frac{86400000}{1024 \times 1024} \approx 82.40 \mathrm{ MB}
$$

(c)

$$
\mathrm{Size (bits)} = 320000 \times 300 = 96000000 \mathrm{ bits}
$$

$$
\mathrm{Size (MB)} = \frac{96000000}{8 \times 1024 \times 1024} \approx 11.44 \mathrm{ MB}
$$

(d)

$$
\mathrm{Compression ratio} = \frac{82.40}{11.44} \approx 7.2 : 1
$$

</details>


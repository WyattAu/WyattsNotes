---
title: Geographic Skills
description: Map skills, data collection, presentation, statistical techniques, GIS, and fieldwork for IB Geography.
slug: geographic-skills
---

# Geographic Skills

## Map Skills

### Scale

Map scale expresses the relationship between distance on the map and distance on the ground. There are three representations:

1. **Representative fraction (RF):** expressed as a ratio, e.g., 1:50 000 means 1 unit on the map represents 50 000 units on the ground. RF is dimensionless.
2. **Linear (graphic) scale:** a graduated line marked with ground distances. Useful because it remains accurate when the map is enlarged or reduced.
3. **Statement scale:** a verbal description, e.g., "1 cm represents 0.5 km."

To convert between RF and statement scale: if RF = 1:50 000, then 1 cm on the map = 50 000 cm = 500 m = 0.5 km on the ground.

Large-scale maps (e.g., 1:10 000) show a small area in greater detail. Small-scale maps (e.g., 1:1 000 000) show a large area in less detail. A 1:10 000 map is a larger scale than a 1:100 000 map because the fraction 1/10 000 is larger than 1/100 000.

### Grid References

**Four-figure grid references** identify a 1 km square on a 1:50 000 topographic map. The easting (x-coordinate, read from left to right) is given first, followed by the northing (y-coordinate, read from bottom to top).

**Six-figure grid references** identify a 100 m square. The four-figure grid reference is subdivided by estimating the position within the square in tenths. For example, if a point lies 4 tenths to the right and 7 tenths up within the square at grid reference 31 45, the six-figure reference is 314 457.

### Contour Interpretation

Contours are lines on a map joining points of equal elevation above a stated datum (usually mean sea level). The vertical spacing between contours is the contour interval (typically 10 m or 20 m on 1:50 000 maps).

Key principles:

- Contours close around hilltops and depressions (depressions are distinguished by hachure marks on the inner contour)
- Closely spaced contours indicate steep slopes; widely spaced contours indicate gentle slopes
- Evenly spaced contours indicate a uniform slope; unevenly spaced contours indicate a slope that varies in steepness
- V-shaped contours pointing uphill indicate valleys; V-shaped contours pointing downhill indicate ridges (spurs)
- Concentric contours with decreasing values toward the centre indicate a depression

To construct a cross-section from a topographic map: draw a line between two points on the map, note the elevation at each point where the line crosses a contour, transfer these points to graph paper with elevation on the vertical axis and horizontal distance on the horizontal axis, and connect the points to show the topographic profile.

## Data Collection

### Primary Data

Primary data is collected firsthand by the researcher through fieldwork. Methods include:

| Method | Description | Strengths | Limitations |
|---|---|---|---|
| Questionnaires | Structured or semi-structured surveys administered in person, by post, or online | Can collect large volumes of data; standardised questions allow comparison | Response bias; low response rates; leading questions can distort results |
| Observations | Systematic recording of phenomena (e.g., traffic counts, land-use mapping, environmental quality surveys) | Direct; no reliance on respondents' recall or honesty | Observer bias; time-consuming; may not capture underlying causes |
| Measurements | Quantitative data collected using instruments (e.g., temperature, pH, flow velocity, pebble size) | Objective; replicable; precise | Equipment errors; sampling may not be representative |
| Interviews | In-depth, open-ended questioning of individuals | Rich qualitative data; can explore complex issues | Difficult to analyse systematically; small sample sizes; interviewee bias |
| Field sketches | Annotated drawings of landscapes, land use, or features | Quick; captures spatial relationships; low cost | Subjective; limited precision |

### Secondary Data

Secondary data is data that has been collected by someone else for another purpose. Sources include:

- **Government statistics:** census data, economic indicators, health data, crime statistics
- **International organisations:** World Bank, UN, UNDP, WHO, FAO databases
- **Academic research:** journal articles, theses, research reports
- **Satellite imagery and remote sensing:** Landsat, Sentinel, MODIS data (see below)
- **Maps and GIS data:** topographic maps, land-use maps, OpenStreetMap, government GIS portals
- **Media and reports:** newspaper articles, NGO reports, corporate environmental reports

**Evaluation.** When using secondary data, consider its reliability (is the source credible? Has the data been peer-reviewed?), accuracy (are measurement methods described? Are confidence intervals reported?), relevance (does the data address the research question at the appropriate scale?), and currency (when was the data collected? Is it up to date?).

## Data Presentation

Effective data presentation communicates patterns, relationships, and anomalies clearly and efficiently. The choice of presentation method depends on the type of data and the purpose of the analysis.

### Graphs

| Graph Type | Use | Example |
|---|---|---|
| Bar chart | Comparing discrete categories | Comparing population density across countries |
| Histogram | Showing frequency distribution of continuous data | Distribution of annual rainfall values |
| Line graph | Showing change over time | Trend in global temperature anomaly, 1850--2023 |
| Scatter graph | Showing the relationship between two variables | Relationship between GNI per capita and HDI |
| Pie chart | Showing proportional composition | Land use composition of a drainage basin |
| Divided bar chart | Showing proportional composition with comparison across categories | Employment structure (primary/secondary/tertiary) across countries |
| Triangular graph | Showing the relative proportions of three variables | Employment structure (primary, secondary, tertiary) |
| Logarithmic scale graph | Showing data spanning several orders of magnitude | Population growth over long time periods |
| Radar (spider) diagram | Showing multiple variables for comparison | Comparing quality of life indicators across cities |

### Maps

Geographic data is often best presented on maps. Types include:

- **Choropleth maps:** areas shaded or coloured according to the value of a variable (e.g., population density by country). Require a classified colour scheme (e.g., quartiles, equal intervals, natural breaks). Best for showing spatial variation in ratio or interval data.
- **Proportional symbol maps:** symbols (typically circles) whose size is proportional to the value of a variable at a specific location. Best for showing absolute quantities at point locations.
- **Isoline maps:** lines joining points of equal value (e.g., isotherms for temperature, isohyets for rainfall, isobars for atmospheric pressure). Best for showing continuous spatial variation.
- **Dot maps:** each dot represents a specified number of a phenomenon. Best for showing the spatial distribution of discrete events (e.g., population distribution).
- **Flow maps:** lines (often with arrows) whose width is proportional to the magnitude of flow between two locations. Best for showing migration, trade, or transport flows.

### Annotated Photographs and Field Sketches

Annotated photographs and field sketches are effective for showing geographic features in context. Annotations should identify specific features, explain processes, and use geographic terminology. Field sketches should include: a title, scale indication, orientation (compass direction), key labelled features, and annotations explaining the geographic significance of observed features.

<details>
<summary>Common Pitfalls: Misleading Data Presentation</summary>

Examiners penalise misleading data presentation. Common errors include: (1) truncating the vertical axis of a bar or line graph, exaggerating differences between categories; (2) using unequal class intervals in choropleth maps without clearly indicating the class boundaries; (3) using 3D pie charts or bar charts, which distort proportions; (4) failing to label axes, provide a title, or include a legend. Always follow conventions: label axes with both the variable name and units; provide a clear, descriptive title; include a legend or key; and use an appropriate scale.

</details>

## Statistical Techniques

### Measures of Central Tendency

| Measure | Definition | When to Use |
|---|---|---|
| Mean | Sum of all values divided by the number of values: $\bar{x} = \frac{\sum{x_i}}{n}$ | For normally distributed interval or ratio data; sensitive to outliers |
| Median | The middle value when data are ranked in order | For skewed data or data with outliers; ordinal data |
| Mode | The most frequently occurring value | For categorical (nominal) data; bimodal or multimodal distributions |

### Measures of Dispersion

**Range:** the difference between the maximum and minimum values. Simple to calculate but sensitive to outliers.

**Interquartile range (IQR):** the difference between the 75th percentile ($Q_3$) and the 25th percentile ($Q_1$). More robust to outliers than the range. The IQR contains the middle 50% of the data.

**Standard deviation:** a measure of the average distance of each data point from the mean:

$$s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n - 1}}$$

where $s$ is the sample standard deviation, $x_i$ are individual data points, $\bar{x}$ is the sample mean, and $n$ is the sample size. A low standard deviation indicates that data points are clustered close to the mean; a high standard deviation indicates that data points are widely dispersed. Standard deviation is only appropriate for normally distributed data and is sensitive to outliers.

### Inferential Statistics

Inferential statistics allow researchers to draw conclusions about a population based on a sample, and to test hypotheses about relationships between variables.

**Spearman's Rank Correlation Coefficient ($r_s$).** A non-parametric test that measures the strength and direction of the association between two ranked variables. The formula is:

$$r_s = 1 - \frac{6 \sum{d_i^2}}{n(n^2 - 1)}$$

where $d_i$ is the difference between the ranks of the two variables for the $i$-th observation, and $n$ is the sample size. The value of $r_s$ ranges from $-1$ (perfect negative correlation) to $+1$ (perfect positive correlation), with 0 indicating no correlation.

To determine whether the correlation is statistically significant, compare $r_s$ to the critical value from a Spearman's rank table at the appropriate significance level (typically $p = 0.05$, i.e., a 5% probability that the observed correlation occurred by chance) and degrees of freedom ($n - 2$). If $|r_s|$ exceeds the critical value, the null hypothesis (that there is no significant correlation) is rejected.

**Chi-squared ($\chi^2$) test.** A non-parametric test that determines whether observed frequencies in a contingency table differ significantly from expected frequencies (which would occur if there were no association between the variables).

$$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$

where $O_i$ is the observed frequency and $E_i$ is the expected frequency for each cell. The expected frequency for each cell is:

$$E_i = \frac{(\mathrm{row\ total}) \times (\mathrm{column\ total})}{\mathrm{grand\ total}}$$

Compare the calculated $\chi^2$ value to the critical value from a chi-squared table at the appropriate degrees of freedom ($\mathrm{df} = (r - 1)(c - 1)$, where $r$ is the number of rows and $c$ is the number of columns) and significance level (typically $p = 0.05$). If the calculated value exceeds the critical value, the null hypothesis is rejected, indicating a statistically significant association between the variables.

**Conditions for validity:** the chi-squared test requires that (1) data are in the form of frequencies (not percentages or proportions); (2) expected frequencies in each cell are at least 5 (if any $E_i \lt 5$, combine categories or use Fisher's exact test); (3) observations are independent.

**Mann-Whitney U test.** A non-parametric test that determines whether two independent samples come from the same population. It is the non-parametric equivalent of the independent samples t-test and is used when data are ordinal or when the assumption of normality is not met.

The test statistic $U$ is calculated by ranking all observations from both samples together, then computing:

$$U_1 = n_1 n_2 + \frac{n_1(n_1 + 1)}{2} - R_1$$

$$U_2 = n_1 n_2 + \frac{n_2(n_2 + 1)}{2} - R_2$$

where $n_1$ and $n_2$ are the sample sizes, and $R_1$ and $R_2$ are the sum of ranks for each sample. The test uses the smaller of $U_1$ and $U_2$. Compare this value to the critical value at the appropriate significance level. If $U$ is less than or equal to the critical value, the null hypothesis (that the two samples come from the same population) is rejected.

<details>
<summary>Common Pitfalls: Choosing the Right Statistical Test</summary>

Selecting the wrong statistical test is a common source of lost marks. The choice depends on the type of data and the research question:

- **Relationship between two continuous variables:** Spearman's rank correlation (non-parametric) or Pearson's product-moment correlation (parametric, requires normally distributed data)
- **Difference between two groups:** Mann-Whitney U test (non-parametric, independent samples) or independent t-test (parametric)
- **Association between two categorical variables:** chi-squared test
- **Difference between more than two groups:** Kruskal-Wallis test (non-parametric) or one-way ANOVA (parametric)

Always state the null hypothesis, calculate the test statistic, compare it to the critical value, and state the conclusion in terms of the original research question. Do not simply state "the test is significant" without explaining what this means geographically.

</details>

## Fieldwork

### Planning

Effective fieldwork begins with careful planning:

1. **Identify the research question or hypothesis.** The question should be specific, geographically defined, and answerable with available methods and resources. For example: "Is there a significant relationship between distance from the CBD and environmental quality in [city]?"
2. **Conduct a literature review.** Review existing studies, theories, and data relevant to the research question.
3. **Select data collection methods.** Choose primary and secondary data collection methods appropriate to the question. Consider the strengths and limitations of each method (see above).
4. **Design a sampling strategy.** Decide whether to use random sampling (every member of the population has an equal probability of selection), systematic sampling (samples taken at regular intervals, e.g., every 100 m along a transect), or stratified sampling (the population is divided into subgroups, and samples are taken from each subgroup in proportion to its size).
5. **Prepare equipment and materials.** Ensure all necessary instruments (e.g., clinometer, pH meter, anemometer), recording sheets, maps, and consent forms are prepared and tested before fieldwork begins.
6. **Conduct a risk assessment.** Identify potential hazards (traffic, water, weather, crime) and implement mitigation measures.

### Methodology

During fieldwork, adhere strictly to the planned methodology to ensure data reliability and replicability. Record all data systematically, including the date, time, location (grid reference), and any relevant environmental conditions. If deviations from the planned methodology are necessary (e.g., due to weather or access restrictions), document them and explain their potential impact on the results.

### Data Analysis

After data collection, analyse the data using appropriate techniques:

1. **Data processing:** clean the data (remove errors and outliers), organise it into tables, and calculate summary statistics (mean, median, standard deviation).
2. **Data presentation:** construct appropriate graphs, maps, and diagrams to display patterns and relationships.
3. **Statistical testing:** apply inferential statistics (Spearman's rank, chi-squared, Mann-Whitney U) to test hypotheses.
4. **Interpretation:** explain the observed patterns in terms of geographic theory, processes, and the specific context of the study area.

### Evaluation

A critical evaluation of the fieldwork is essential. Consider:

- **Reliability:** would the same results be obtained if the study were repeated? Were sample sizes adequate? Were measurement instruments calibrated?
- **Validity:** does the study actually measure what it claims to measure? Were the data collection methods appropriate for the research question?
- **Limitations:** what were the practical constraints (time, access, equipment, weather)? How might these have affected the results?
- **Bias:** were the sampling strategy, data collection methods, or analysis techniques biased in any way? Were respondents representative of the wider population?
- **Improvements:** what could be done differently in a future study to address the identified limitations?

## Geographic Information Systems (GIS)

### What Is GIS?

A Geographic Information System (GIS) is a computer-based system for storing, managing, analysing, and displaying spatial data. GIS integrates geographic data (where things are) with attribute data (what things are like) through a shared coordinate system.

### GIS Data Types

| Data Type | Description | Example |
|---|---|---|
| Vector data | Represents features as points (e.g., cities), lines (e.g., rivers, roads), or polygons (e.g., countries, land-use zones) | A polygon layer showing census tracts with attribute data on population density |
| Raster data | Represents data as a grid of cells (pixels), each with a numerical value | Satellite imagery, digital elevation models (DEMs), land surface temperature maps |

### GIS Layers

GIS organises data into layers, each representing a different theme (e.g., roads, rivers, elevation, land use, population). Layers can be overlaid and analysed in combination. For example, overlaying a flood risk map with a population density map can identify the number of people at risk of flooding in a given area.

### Spatial Analysis

GIS supports a wide range of spatial analysis operations:

- **Buffer analysis:** creating a zone of specified distance around a feature (e.g., a 500 m buffer around a school to identify residential areas within walking distance)
- **Overlay analysis:** combining two or more layers to identify areas that meet specified criteria (e.g., overlaying soil type, slope, and rainfall layers to identify areas suitable for a particular crop)
- **Network analysis:** analysing connectivity, routing, and accessibility along networks (e.g., calculating the shortest path between two points on a road network, or identifying areas within a 15-minute drive of a hospital)
- **Proximity analysis:** measuring distances between features (e.g., calculating the average distance from residential areas to the nearest public transport stop)
- **Spatial interpolation:** estimating values at unsampled locations based on values at sampled locations (e.g., creating a continuous rainfall surface from discrete rain gauge data)

### Applications in Geography

GIS is used extensively in geographic research and in practical applications including: urban planning (land-use zoning, infrastructure planning), environmental management (habitat mapping, pollution monitoring), disaster management (flood risk assessment, evacuation planning), transport planning (route optimisation, accessibility analysis), and public health (mapping disease incidence, identifying health care deserts).

<details>
<summary>Common Pitfalls: GIS Is Not Just Mapping</summary>

Students often conflate GIS with digital mapping. While GIS can produce maps, its primary value lies in its analytical capabilities. A map is a static representation of spatial data; GIS is a dynamic tool for querying, analysing, and modelling spatial relationships. When discussing GIS in an examination, focus on the analytical operations (buffer, overlay, network analysis) and the geographic insights they provide, not just the production of maps.

</details>

## Satellite Imagery and Remote Sensing

### Principles

Remote sensing is the acquisition of information about Earth's surface without physical contact, typically using sensors mounted on satellites or aircraft. Sensors detect electromagnetic radiation (visible light, infrared, microwave) reflected or emitted by Earth's surface and atmosphere.

### Key Concepts

- **Spatial resolution:** the size of the smallest feature that can be distinguished on an image, typically expressed as the ground area represented by a single pixel (e.g., 10 m for Sentinel-2, 30 m for Landsat 8, 0.3 m for commercial high-resolution satellites such as WorldView).
- **Temporal resolution:** how frequently a satellite revisits the same location (e.g., Landsat revisits every 16 days; Sentinel-2 revisits every 5 days at the equator).
- **Spectral resolution:** the number and width of wavelength bands that a sensor records. Multispectral sensors record several discrete bands (e.g., Landsat 8 records 11 bands spanning visible, near-infrared, shortwave infrared, and thermal infrared). Hyperspectral sensors record hundreds of narrow bands, providing detailed spectral signatures that can be used to identify specific materials (e.g., mineral types, crop species).
- **Radiometric resolution:** the sensitivity of the sensor to differences in signal intensity, typically expressed as the number of bits per pixel (e.g., 8-bit sensors distinguish 256 brightness levels; 12-bit sensors distinguish 4096 levels).

### Applications

| Application | Satellite/Sensor | Use |
|---|---|---|
| Land-use and land-cover change mapping | Landsat, Sentinel-2 | Monitoring deforestation, urbanisation, agricultural expansion |
| Vegetation monitoring | MODIS, Sentinel-2, Landsat | NDVI (Normalised Difference Vegetation Index) for monitoring crop health, drought, and vegetation phenology |
| Flood monitoring | Sentinel-1 (SAR) | Mapping flood extent using synthetic aperture radar, which penetrates cloud cover |
| Sea surface temperature | MODIS, NOAA AVHRR | Monitoring ocean currents, upwelling, coral bleaching |
| Glacier monitoring | Landsat, ASTER | Tracking glacier extent, mass balance, and retreat rates |
| Air quality | Sentinel-5P (TROPOMI) | Monitoring atmospheric concentrations of $\mathrm{NO_2}$, $\mathrm{SO_2}$, $\mathrm{O_3}$, and particulate matter |

### Normalised Difference Vegetation Index (NDVI)

NDVI is a widely used indicator of vegetation density and health, calculated from the near-infrared (NIR) and red (RED) bands of a multispectral satellite image:

$$\mathrm{NDVI} = \frac{\mathrm{NIR} - \mathrm{RED}}{\mathrm{NIR} + \mathrm{RED}}$$

Healthy vegetation strongly reflects near-infrared light and absorbs red light (for photosynthesis), yielding NDVI values close to $+1$. Bare soil, rock, and built-up surfaces yield NDVI values close to $0$. Water bodies yield negative NDVI values. NDVI is used extensively in monitoring agricultural productivity, drought conditions, and deforestation.

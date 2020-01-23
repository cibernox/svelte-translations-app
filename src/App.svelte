<script>
	import { t, locale, locales } from 'precompile-intl-runtime';
	const genders = ['male', 'female', 'other'];
	let selectedGender = 'female';
	let count1 = 3;
	let count2 = 3;
	let count3 = 1;
	let trainers = 0;
	let friends = 0;
</script>

<main>
	<h1>Current locale is "{$locale}"</h1>
	<p data-test-id="plain">{$t("plain")}</p>
	<p data-test-id="interpolated">
		{$t("interpolated", { values: { count: count1 } })}
		<input type="number" bind:value={count1} min="0" max="20">
	</p>
	<p data-test-id="interpolated-zero">{$t("interpolated", { values: { count: 0 } })} [zero]</p>
	<p data-test-id="interpolated-false">{$t("interpolated", { values: { count: false } })} [false]</p>
	<p data-test-id="interpolated-null">{$t("interpolated", { values: { count: null } })} [null]</p>
	<p data-test-id="interpolated-undefined">{$t("interpolated", { values: { count: undefined } })} [undefined]</p>
	<!-- <p data-test-id="time">{$t("time", { values: { now: new Date() } })}</p>
	<p data-test-id="time-custom-format"">{$t("time-custom-format", { values: { now: new Date() } })}[custom format]</p>
	<p data-test-id="date">{$t("date", { values: { today: new Date() } })}</p>
	<p data-test-id="date-custom-format">{$t("date-custom-format", { values: { today: new Date() } })}[custom format]</p>
	<p data-test-id="number">{$t("number", { values: { n: 1234567 } })}</p>
	<p data-test-id="percent">{$t("percent", { values: { n: 1234567 } })}</p> -->
	<p data-test-id="pluralized">
		{$t("pluralized", { values: { count: count2 } })}
		<input type="number" bind:value={count2} min="0" max="20">
	</p>
	<p data-test-id="pluralized-with-hash">
		{$t("pluralized-with-hash", { values: { count: count3 } })}
		<input type="number" bind:value={count3} min="0" max="20"> [Interpolation with #]
	</p>
	<p data-test-id="selected">
		{$t("selected", { values: { gender: selectedGender } })}
		{#each genders as g}
			<button type="button" disabled="{selectedGender === g}" on:click="{() => selectedGender = g}">{g}</button>
		{/each}
	</p>
	<p data-test-id="nested-offsets">
		{$t("nested-offsets", { values: { trainers, friends } })}
		Trainers: <input type="number" bind:value={trainers} min="0" max="20"> | Friends: <input type="number" bind:value={friends} min="0" max="20">
	</p>

	{#each $locales as l}
		<button type="button" disabled="{$locale === l}" on:click="{() => locale.set(l)}">{l}</button>
	{/each}
</main>

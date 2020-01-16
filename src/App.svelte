<script>
  import { t } from 'svelte-i18n';
</script>

<main>
	<h1>Translations:</h1>
	<p>{$t("plain")}</p>
	<p>{$t("interpolated")}</p>
	<p>{$t("time")}</p>
	<p>{$t("time-custom-format")}</p>
	<p>{$t("date")}</p>
	<p>{$t("date-custom-format")}</p>
	<p>{$t("number")}</p>
	<p>{$t("percent")}</p>
	<p>{$t("pluralized")}</p>
	<p>{$t("selected")}</p>
</main>

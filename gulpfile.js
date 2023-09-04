const { src, dest, series, watch, task } = require('gulp')
const concat = require('gulp-concat')
const del = require('del')
const htmlMin = require('gulp-htmlmin')
const cleanCss = require('gulp-clean-css')
const svgSprites = require('gulp-svg-sprite')
const image = require('gulp-imagemin')
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const ghPages = require('gulp-gh-pages');

const clean = () => {
	return del(['dist'])
}

const fonts = () => {
	return src('src/fonts/**')
	.pipe(dest('dist/fonts'))
}

const styles = () => {
	return src([
		'src/css/normolize.css',
		'src/css/common.css',
		'src/css/header.css',
		'src/css/footer.css',
		'src/css/main-page/*.css',
	])
	.pipe(sourcemaps.init())
	.pipe(concat('style.css'))
	.pipe(cleanCss({
		level: 2
	}))
	.pipe(sourcemaps.write())
	.pipe(dest('dist'))
	.pipe(browserSync.stream())
}
const stylesCatalog = () => {
	return src([
		'src/css/normolize.css',
		'src/css/common.css',
		'src/css/catalogue/*.css',
		'src/css/header.css',
		'src/css/footer.css',
		'src/css/breadcrumbs.css',
	])
	.pipe(sourcemaps.init())
	.pipe(concat('style-catalog.css'))
	.pipe(cleanCss({
		level: 2
	}))
	.pipe(sourcemaps.write())
	.pipe(dest('dist'))
	.pipe(browserSync.stream())
}
const stylesCard = () => {
	return src([
		'src/css/normolize.css',
		'src/css/common.css',
		'src/css/modal/*.css',
		'src/css/product-card.css',
		'src/css/header.css',
		'src/css/footer.css',
		'src/css/breadcrumbs.css',
	])
	.pipe(sourcemaps.init())
	.pipe(concat('style-card.css'))
	.pipe(cleanCss({
		level: 2
	}))
	.pipe(sourcemaps.write())
	.pipe(dest('dist'))
	.pipe(browserSync.stream())
}

const htmlMinify = () => {
	return src('src/**/*.html')
	.pipe(htmlMin({
		collapseWhitespace: true,
	}))
	.pipe(dest('dist'))
	.pipe(browserSync.stream())
}

const svgSprite = () => {
	return src('src/img/svg/**/*.svg')
	.pipe(svgSprites({
		mode: {
			stack: {
				sprite: '../sprite.svg'
			}
		}
	}))
	.pipe(dest('dist/img'))
}
const images = () => {
	return src ([
		'src/img/**/*.webp',
		'src/img/**/*.jpg',
		'src/img/**/*.jpeg',
		'src/img/**/*.png',
		'src/img/**/*.svg',
	])
	.pipe(dest('dist/img'))
}

const scriptIndex = () => {
	return src([
		'src/js/burger.js',
		'src/js/select.js',
		'src/js/swiper.js',
		'src/js/showmore.js',
		'src/js/main-page-validate.js',
		'src/js/search-error.js',
	])
	.pipe(sourcemaps.init())
	.pipe(concat('index.js'))
	.pipe(sourcemaps.write())
	.pipe(dest('dist'))
	.pipe(browserSync.stream())
}
const scriptCatalog = () => {
	return src([
		'src/js/burger.js',
		'src/js/select.js',
		'src/js/customCheckbox.js',
		'src/js/catalog-swiper.js',
		'src/js/search-error.js',
	])
	.pipe(sourcemaps.init())
	.pipe(concat('catalog.js'))
	.pipe(sourcemaps.write())
	.pipe(dest('dist'))
	.pipe(browserSync.stream())
}
const scriptCard = () => {
	return src([
		'src/js/burger.js',
		'src/js/select.js',
		'src/js/swiper.js',
		'src/js/modal.js',
		'src/js/modal-validation.js',
		'src/js/search-error.js',
	])
	.pipe(sourcemaps.init())
	.pipe(concat('card.js'))
	.pipe(sourcemaps.write())
	.pipe(dest('dist'))
	.pipe(browserSync.stream())
}

const watchFiles = () => {
	browserSync.init({
		server: {
			baseDir: 'dist'
		}
	})
}

watch('src/**/*.html', htmlMinify)
watch([		
	'src/css/main-page/*.css',
	'src/css/header.css',
	'src/css/footer.css',
	'src/css/common.css',
	'src/css/normolize.css',
], styles)

watch([
	'src/css/catalogue/*.css',
	'src/css/header.css',
	'src/css/footer.css',
	'src/css/common.css',
	'src/css/breadcrumbs.css',
	'src/css/normolize.css',
], stylesCatalog)

watch([		
	'src/css/modal/*.css',
	'src/css/product-card.css',
	'src/css/header.css',
	'src/css/footer.css',
	'src/css/common.css',
	'src/css/breadcrumbs.css',
	'src/css/normolize.css',
], stylesCard)


watch('src/img/svg/**/*.svg', svgSprites)
watch(([
	'src/js/burger.js',
	'src/js/select.js',
	'src/js/customCheckbox.js',
	'src/js/showmore.js',
	'src/js/main-page-validate.js',
	'src/js/search-error.js',
]), scriptIndex)
watch([
	'src/js/burger.js',
	'src/js/select.js',
	'src/js/catalog-swiper.js',
	'src/js/customCheckbox.js',
	'src/js/search-error.js',
], scriptCatalog)
watch([
	'src/js/burger.js',
	'src/js/select.js',
	'src/js/swiper.js',
	'src/js/modal.js',
	'src/js/modal-validation.js',
	'src/js/search-error.js',
], scriptCard)
watch('src/fonts/**', fonts)


exports.clean = clean
exports.default = series(clean, fonts, htmlMinify, scriptIndex, scriptCatalog, scriptCard, styles, stylesCatalog, stylesCard, images, svgSprite, watchFiles)

task('deploy', () => src('./dist/**/*').pipe(ghPages()));
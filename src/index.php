<?php
/**
 * Plugin Name:  Lazy Blocks: Inner Blocks
 * Description:  Updates the inner blocks control to support allowed blocks selection
 * Plugin URI:   https://github.com/LiamMartens/lzb-inner-blocks
 * Version:      @@plugin_version
 * Author:       Liam Martens
 * Author URI:   https://liammartens.com
 * License:      GPLv2
 * License URI:  https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:  @@text_domain
 *
 * @package lzb-inner-blocks
 */

if (!defined('ABSPATH')) {
  exit;
}

add_action('init', function() {
  if (!class_exists('LazyBlocks')) {
    return;
  }

  load_plugin_textdomain('@@text_domain', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/');
  include_once plugin_dir_path(__FILE__) . '/lzb-inner-blocks.php';
}, 11);